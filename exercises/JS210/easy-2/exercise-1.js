// JS210 Exercises | Easy 2
// Exercise 1 - Ddaaiillyy ddoouubbllee

/*
PROBLEM:
Given a string argument, define a function that returns the original string
with any consecutive duplicate characters collapsed into a single character.

Input: String
Output: String

Rules:
  - Consecutive duplicate characters are collapsed into a single character
    - "dddaii  lyyh" -> "dai lyh"
  - Assume all arguments will be a string
  - Assume non-ASCII UTF-16 characters will not appear in the string argument.

TEST CASES:
output: "daily double"
crunch('ddaaiillyy ddoouubbllee');    // "daily double"

output: "4abcabcba"
crunch('4444abcabccba');              // "4abcabcba"

output: "g"
crunch('ggggggggggggggg');            // "g"

output: "a"
crunch('a');                          // "a"

output: ""
crunch('');                           // ""

REQUIREMENTS:
  - check if the current character is the same as the previous character
    - if current character is same as previous character
      - do not add current character to final output
    - if current character is different from previous character
      - add current character to final output

DATA STRUCTURE:
  STRING,
  ARRAY -> array.filter

ALGORITHM:
  LET PREVIOUS_CHAR;
  LET RESULT = "";

  ITERATE THROUGH EACH CHARACTER OF STRING
    IF CURRENT_CHAR !== PREVIOUS_CHAR
      ADD CURRENT_CHAR TO RESULT
    
    PREVIOUS_CHAR = CURRENT_CHAR

  RETURN RESULT


PREVIOUS_CHAR;
RESULT = ""

crunch('');                           // ""

*/

function crunch(str) {
  let previousChar;
  let result = "";

  for (let char of str) {
    if (char !== previousChar) result += char;
    previousChar = char;
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""