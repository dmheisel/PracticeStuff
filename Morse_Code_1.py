#Codewars Morse Code decoder part 1
#Codewars includes a Morse Code dictionary

def decodeMorse(morse_code):    
    code_letters = map(lambda x: MORSE_CODE.get(x) if MORSE_CODE.get(x) else ' ',[letter for letter in morse_code.split(' ')])
    decoded = " ".join((''.join(code_letters)).split()) #joins all letters together then strips superfluous spaces
    return decoded
    
    
