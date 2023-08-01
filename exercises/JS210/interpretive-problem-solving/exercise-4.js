// JS210 Exercises | Interpretive Problem Solving
// Exercise 4 - Caesar Cipher

/*
PROBLEM:
Given a string of text and number of shifted letters, return the string 
encrypted through the Caesar Cipher algorithm. 

Input: String, Number
Output: String

Rules:
  - The Number argument represents the number of letters a given letter should
    be shifted. 
      - i.e., ("A", 3) -> "D"
  - Letter casing should be preserved
  - If the letter exceeds the end of the alphabet ("Z"), wrap around back to the
    beginning ("A")
      - i.e., ("Y", 3) -> "B"
  - The encryption only applies to alphabetical characters (upper and lower).
    - any other character is left as is.

  Implicit:
    - Return an empty if input is an empty string
    - Assume argument will always be string and provided

TEST CASES:
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"

caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

REQUIREMENT:
  - ITERATE EVERY CHARACTER OF STRING
  - SHIFT EVERY ALPHABETICAL CHARACTER (KEY) NUMBER OF TIMES
    - CONVERT LETTER INTO ASCII CODE VALUE
    - ADD SHIFT KEY VALUE TO ASCII CODE
    - CONVERT RESULTING VALUE BACK INTO ALPHABET LETTER
  - SHIFTS THAT EXCEED THE ALPHABET SHOULD WRAP BACK AROUND TO BEGINNING
    CHARCODE 65: "A"
    CHARCODE 90: "Z"

    90 + 25 = 115 
    Y : 89 + 26

    CHARCODE 97: "a"
    CHARCODE 122: "z"
  - SKIP OVER NON-ALPHABETICAL CHARACTERS
  - PRESERVE LETTER CASING

DATA STRUCTURE:
  STRING, ARRAY

ALGORITHM:
  LET ENCRYPTION = "";

  FOR EVERY CHARACTER OF STRING
    IF ALPHABETICAL LETTER
      DETERMINE ITS ASCII CODE VALUE
      
      IF UPPER CASE LETTER
        ADD THE SHIFT KEY VALUE TO ASCII CODE VALUE
        WHILE RESULT VALUE > 90
          SUBTRACT 26 (ALPHABET SIZE) FROM RESULTING VALUE
        CONVERT BACK TO LETTER AND ADD TO ENCRYPTION
      IF LOWER CASE LETTER
        ADD THE SHIFT KEY VALUE TO ASCII CODE VALUE
        WHILE RESULT VALUE > 122
          SUBTRACT 26 (ALPHABET SIZE) FROM RESULTING VALUE
        CONVERT BACK TO LETTER AND ADD TO ENCRYPTION
    ELSE
      ADD CHARACTER TO ENCRYPTION

  RETURN ENCRYPTION
*/


function caesarEncrypt(text, shift) {
  let encryption = "";

  for (let char of text) {
    if (/[a-z]/i.test(char)) {
      encryption += shiftChar(char, shift);
    } else {
      encryption += char;
    }
  }

  return encryption;
}

function shiftChar(char, shift) {
  let ascii = char.charCodeAt(0);
  if (/[a-z]/.test(char)) {
    ascii += shift;
    while (ascii > 122) ascii -= 26;
  } else {
    ascii += shift;
    while (ascii > 90) ascii -= 26;
  }

  return String.fromCharCode(ascii);
}

module.exports = caesarEncrypt;