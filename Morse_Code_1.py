#Codewars Morse Code decoder part 1
#Codewars includes a Morse Code dictionary

def decodeMorse(morse_code):    
    code_letters = map(lambda x: MORSE_CODE.get(x) if MORSE_CODE.get(x) else ' ',[letter for letter in morse_code.split(' ')])
    decoded = " ".join((''.join(code_letters)).split()) #joins all letters together then strips superfluous spaces
    return decoded
    
    
from itertools import groupby
def decodeBits(bits):
  bits_list = [''.join(g) for k, g in groupby(bits)]  
  print(bits_list)
  morse_code = ''
  for bit in bits_list:
    if int(bit[0]) == 0 and len(bit) % 7 == 0:
      morse_code += ' '
    if int(bit[0]) == 1:
      if len(bit) % 3 == 0:
        morse_code += '-'
      else:
        morse_code += '.'
  print(morse_code)
    
