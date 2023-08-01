// JS210 Exercises | Easy 1
// Exercise 6 - Short Long Short

/*
PROBLEM:
Given two strings of differing lengths, return the concatenation of the 
shorter string, the longer string, and the shorter string once again.

Input: String, String
Output: String

Rules:
  - The provided arguments are two strings of different lengths
  - Assume that arguments will always be two strings.
  - Either argument could shorter/longer string.
  - Consider whitespace as part of the length of string

TEST CASES:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

REQUIREMENTS:
  - function takes in two string arguments
  - returns [shorterString] + [longerString] + [shorterString]
    - determine which of the two arguments is the shorter string / longer string

DATA STRUCTURE:
  STRINGS

ALGORITHM:
  DETERMINE WHICH STRING ARGUMENT IS LONGER / SHORTER
  LET SHORT = IF STRING1 IS LONGER THAN STRING2 RETURN STRING2 ELSE RETURN STRING1
  LET LONG = IF STRING1 IS LONGER THAN STRING2 RETURN STRING1 ELSE RETURN STRING2

  RETURN SHORT + LONG + SHORT

*/

function shortLongShort(str1, str2) {
  let short = str1.length < str2.length ? str1 : str2;
  let long = short === str1 ? str2 : str1;

  return short + long + short;
}

console.log(shortLongShort("abc", "defghi"));
console.log(shortLongShort("abcde", "fgh"));
console.log(shortLongShort("", "xyz"));