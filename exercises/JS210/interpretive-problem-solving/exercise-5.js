// JS210 Exercises | Interpretive Problem Solving
// Exercise 5 - Vigenere Cipher

/*
PROBLEM:
Given a text and shift keyword, return the text encrypted through the Vigenere 
Cipher.

Input: String (plaintext), String (keyword)
Output: String (encrypted message)

Rules:
  Explicit
    - Vigenere Cipher
      - A given letter in the alphabet has a shift value according to its index
        in the alphabet.
        - "A" -> 0, "B" -> 1, Z -> 25
      - Each letter of the plaintext is caesar ciphered with a shift value of
        its corresponding keyword letter. 

        - plaintext: Pineapples don't go on pizzas!
          keyword: meat

        - plaintext : Pine appl esdo ntgo onpi zzas
          shift     : meat meat meat meat meat meat
          ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
    - Non-alphabetical characters are preserved, not changed
    - Letter case for shift value letter does not matter
      - "A" -> 0, "a" -> 0
      - "B" -> 1, "b" -> 1
      - "Z" -> 25, "z" -> 25

  Implicit
    - Assume argument will always be non-empty string
    - Assume keyword will only have alphabetical letters
    - Preserve letter case for shifted text
    - Exclude any non-alphabetical characters from output
  
TEST CASES:
  - plaintext: Pineapples don't go on pizzas!
    keyword: meat

  - plaintext : Pine appl esdo ntgo onpi zzas
    shift     : meat meat meat meat meat meat
    ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
  
REQUIREMENT:
  - preserve non-alphabetical characters
  - determine the shift value for a given letter in the keyword
    - "abcdefghijklmnopqrstuvwxyz"
    - index of letter in alphabet === shift value for caesar cipher
  - map a repeating sequence of the keyword to the plaintext
  - have tracker for keyword mapping
    - move tracker forward only when alphabetical character is encountered
  - every time alphabetical character is encountered, increment trackerIndex

"Pineapples don't go on pizzas!", "meat"
Bmnxmtpeqw dhz'x gh ar pbldal!

DATA STRUCTURE:
  STRING, ARRAY
  CHOICE: STRING

ALGORITHM:
  KEYWORD = "meat"
  LET TRACKER = 0
  LET ENCRYPTED_TEXT = ""
  CONST ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  FOR EACH CHARACTER OF PLAINTEXT
    IF CHARACTER IS ALPHABET LETTER
      SHIFT VALUE = DETERMINE KEYWORD[TRACKER VALUE]'S INDEX IN ALPHABET
        - CONVERT CHARACTER TO LOWER CASE LETTER
      TAKE CHARACTER, USE CAESAR CIPHER USING SHIFT VALUE
      ADD CIPHERED CHARACTER TO ENCRYPTED_TEXT
      TRACKER = (TRACKER + 1) % 4
    ELSE
      ADD CHARACTER TO ENCRYPTED_TEXT
  
  RETURN ENCRYPTED_TEXT
*/

let caesarEncrypt = require("./exercise-4.js");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function viginereEncrypt(plaintext, keyword) {
  let trackerIndex = 0;
  let encryptedText = "";

  for (let char of plaintext) {
    if (/[a-z]/i.test(char)) {
      let shiftValue = ALPHABET.indexOf(keyword[trackerIndex]);
      encryptedText += caesarEncrypt(char, shiftValue);
      trackerIndex = (trackerIndex + 1) % 4;
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
}

console.log(viginereEncrypt("Pineapples don't go on pizzas!", "meat"));
