#Codewars Morse Code decoder part 1
#Codewars includes a Morse Code dictionary
from itertools import groupby
import jenkspy

morse = (".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- "
         ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- "
         ".--. --.- .-. ... - ..- ...- .-- -..- -.-- --..").split(' ')
abc = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
MORSE_CODE = dict(zip(morse, abc))


def decodeBitsAdvanced(bits):
    bits_list = [''.join(g) for k, g in groupby(bits.strip('0'))]
    data_key = [len(bit) for bit in bits_list]
    input_array = [[int(bit[0]), len(bit)] for bit in bits_list]
    breaks = jenkspy.jenks_breaks(data_key, nb_class=3)
    morse_code = ''
    for bit in input_array:
        if bit[0] == 1:
            if bit[1] > breaks[1]:
                morse_code += '-'
            else:
                morse_code += '.'
        if bit[0] == 0:
            if bit[1] > breaks[1] and bit[1] <= breaks[2]:
                morse_code += ' '
            if bit[1] > breaks[2]:
                morse_code += '  '
    return morse_code

def decodeMorse(morse_code):    
    morse_words = (morse_code.split(' '))
    #iterates through list of each letter, if no letter inputs a space, then joins it together in a string for the decoded message
    decoded = ''.join(map(lambda x: MORSE_CODE.get(x) if MORSE_CODE.get(x) else ' ',[letter for letter in morse_words]))
    return decoded


print(decodeMorse(decodeBitsAdvanced('0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000')))
