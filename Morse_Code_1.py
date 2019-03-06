#Codewars Morse Code decoder part 1
#Codewars includes a Morse Code dictionary
morse = (".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- "
         ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- "
         ".--. --.- .-. ... - ..- ...- .-- -..- -.-- --..").split(' ')
abc = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
MORSE_CODE = dict(zip(morse, abc))```

from itertools import groupby

def decodeMorse(morse_code):    
  morse_words = (morse_code.split(' '))
  #iterates through list of each letter, if no letter inputs a space, then joins it together in a string for the decoded message
  decoded = ''.join(map(lambda x: MORSE_CODE.get(x) if MORSE_CODE.get(x) else ' ',[letter for letter in morse_words]))
  return decoded

def decodeBits(bits):
  #converts string of bits into list of each input (groupby creates new string on each change between 0 and 1), 
  #removes  any leading or trailing 0's
  bits_list = [''.join(g) for k, g in groupby(bits.strip('0'))]  
  #time unit is the minimum length of a group -- the smallest input is the base time unit.  *3 for dashes and letter-breaks, 
  # * 7 for spaces
  time_unit = min([len(bit) for bit in bits_list)
  morse_code = '' 
  for bit in bits_list:
    if int(bit[0]) == 0 and len(bit) == time_unit*3:
      morse_code += ' '
    if int(bit[0]) == 0  and len(bit) == time_unit*7:
      morse_code += '  '   
    if int(bit[0]) == 1:
      if len(bit) == time_unit*3:
        morse_code += '-'
      else:
        morse_code += '.'
  return morse_code

