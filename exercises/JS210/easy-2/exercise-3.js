// JS210 Exercises | Easy 2
// Exercise 3 - Stringy Strings

/*
PROBLEM:
Given a positive integer, return a string of alternating "1"s and "0"s, starting
with "1". The length of the returned string should match the given integer.

Input: Number (positive integer)
Output: String

Rules:
  - Output string should always start with "1"
  - String should consist of alternating "1"s and "0"s
  - Length of the string should be equal to the Number argument
  - Assume input will always be a positive integer.

TEST CASES:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

REQUIREMENTS:
  - Length of returned string should be the provided integer.
  - String begins with "1"
  - Alternate of "1"s and "0"
  - Even indices of returned string: "1"
  - Odd indices of returned string: "0"

DATA STRUCTURES:
  OPTIONS:
    ARRAY - Abstraction methods (MAP)
    STRING

ALGORITHM:
  ARRAY = [];

  FOR I IN RANGE OF INTEGER
    IF I IS EVEN
      PUSH "1" TO ARRAY
    ELSE
      PUSH "0" TO ARRAY

  RETURN ARRAY JOINED INTO A SINGLE STRING
*/

function stringy(length) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(i % 2 === 0 ? "1" : "0");
  }

  return arr.join("");
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"