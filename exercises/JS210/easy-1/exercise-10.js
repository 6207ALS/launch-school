// JS210 Exercises | Easy 1
// Exercise 10 - UTF-16 String Value

/*
PROBLEM:
Define a function that takes a string argument and returns its UTF-16 value.

Input: String
Output: Number

Rules:
  - UTF-16 Value = sum of the UTF-16 value of every character in the string
  - The String.prototype.charCodeAt() function should be used to determine
    the UTF-16 value of a given character.
  - Assume that argument will always be string.
  - Function should be able to recognize non-ASCII characters in the string
    - non-ASCII characters are written through their character code
      - Ω -> "/u03A9"
  
TEST CASES:
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0


// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
utf16Value("\u03A9\u03A9\u03A9")
utf16Value("\u03A9Launch School")

REQUIREMENTS:
  - iterate through each character of the string
  - determine the UTF-16 value of each character
  - determine if a series of characters represent a non-ASCII character code
  - String.charCodeAt() recognizes a non-ASCII UTF-16 character as a single character

DATA STRUCTURE:
  STRING
  ARRAY -> Abstraction methods

ALGORITHM:
  SPLIT STRING INTO AN ARRAY

  FOR EACH CHARACTER OF ARRAY
    REPLACE CHARACTER WITH ITS UTF-16 VALUE

  RETURN THE SUM OF THE ARRAY'S VALUES
*/

function utf16Value(str) {
  let characters = str.split("");
  let utfValues = characters.map(character => character.charCodeAt(0));

  return utfValues.reduce((acc, val) => acc + val, 0);
}


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811