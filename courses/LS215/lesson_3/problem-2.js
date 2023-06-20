// LS215: A General Problem Solving Approach
// An Example Problem - Problem 2

/*
The Luhn formula is a simple checksum formula used to validate a variety of 
identification numbers, such as credit card numbers and Canadian Social 
Insurance Numbers.

The formula verifies a number against its included check digit, which is usually 
appended to a partial number to generate the full number. This number must pass 
the following test:

- Counting from the rightmost digit and moving left, double the value of every 
  second digit

- For any digit that thus become 10 or more, subtract 9 from the result
  - 1111 becomes 2121
  - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

- Add all these digits together
  - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
  - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 
10 is congruent to 0), then the number is valid according to the Luhn Formula; 
else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 
6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid 
per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" 
as valid. You can ignore all non-numeric characters in the input string.
*/

/*
PROBLEM:
Given a number in string format, check if it is valid per the Luhn formula.

Input: String
Output: Boolean

Rules:
  - Ignore all non-numeric characters in the input string.
  - Counting from the rightmost digit and moving left, double the value of every 
    second digit.
      - For any digit that thus become 10 or more, subtract 9 from the result
        - 1111 becomes 2121
        - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
  - Calculate the sum of the resulting digits
  - If checksum % 10 === 0 -> VALID
  - If checksum % 10 === 0 -> INVALID

DATA STRUCTURE:
  options: string, array
  CHOICE: array

ALGORITHM:
  IF INPUT IS "" OR NOT TYPE STRING 
    RETURN FALSE
  
  REMOVE ANY NON-NUMERIC CHARACTERS FROM STRING
  SPLIT STRING INTO ARRAY, INDIVIDUAL DIGITS

  LET isSecondDigit = false
  FROM RIGHTMOST ELEMENT OF ARRAY TO BEGINNING OF ARRAY
    IF isSecondDigit
      IF CURRENT ELEMENT * 2 >= 10
        CURRENT ELEMENT = (CURRENT ELEMENT * 2) - 10
      ELSE
        CURRENT ELEMENT = CURRENT ELEMENT * 2
    
    isSecondDigit = !isSecondDigit;

  LET checksum = SUM OF VALUES OF ARRAY

  RETURN checksum % 10 === 0;
*/

function isValid(str) {
  if (str === "" || typeof str !== "string") return false;

  str = str.replaceAll(/\D/g, "").split("").map(char => Number(char));
  let isSecondDigit = false;

  for (let i = str.length - 1; i >= 0; i--) {
    if (isSecondDigit) {
      if (str[i] * 2 >= 10) {
        str[i] = (str[i] * 2) - 9;
      } else {
        str[i] = str[i] * 2;
      }
    }

    isSecondDigit = !isSecondDigit;
  }

  let checksum = str.reduce((acc, val) => acc + val);

  return checksum % 10 === 0;
}

// invalid inputs
console.log(isValid("")); // false, BUT inconclusive - ask interviewer
console.log(isValid([])); // false

// single length input
console.log(isValid("1")); // false, sum is 1
console.log(isValid("0")); // true, sum is 0

// invalid
console.log(isValid("1111")); // false

// valid
console.log(isValid("8763")); // true

// valid, but has non-numeric characters
console.log(isValid("2323 2005 7766 3554")); // true


// Further exploration
/*
Write a function that can add a check digit to make the number valid per the 
Luhn formula and return the original number plus that digit. This should give 
"2323 2005 7766 3554" in response to "2323 2005 7766 355".
*/

/*
Given a series of numbers as a string, return the original number plus a digit
that will make the number pass the Luhn formula.

Input: String
Output: String

RULES:
  - original number + 1 digit
  - (question) can we assume the input will always be an invalid number?
    - some inputs will be invalid, other will be valid already
  - the added digit is appended to the end of the number
  - can use the previous isValid() function.

TEST CASES:
"2323 2005 7766 3551"
"2323 2005 7766 3554"

"111" -> "121" -> "4" -> not valid
"1110" -> "2120" -> "5" -> not valid
"1111" -> "2121" -> "6" -> not valid
...
"1115" -> "2125" -> "10" -> valid
"1115"

8763 -> "7733" -> 20 -> valid
"8763"

- first, check if number is already valid
  - if valid, return number

- append 0 to end of number
- if (checksum is valid number)
  - return number
- if not valid, increment the appended number by 1, 
- repeat process

DATA STRUCTURE:
  options: string, array
  CHOICE: array

ALGORITHM:
  IF STR IS VALID NUMBER
    RETURN STR

  SPLIT STR BY INDIVIDUAL ELEMENTS
  FOR let i (0 - 9)
    ASSIGN I TO STR[LAST INDEX + 1]
    IF STR IS VALID NUMBER
      RETURN STR
  
  RETURN STR
*/

function makeValid(str) {
  str = str.replaceAll(/\D/g, "");
  if (isValid(str)) return str;

  str = str.split("");
  let lastDigit = str.length;

  for (let i = 0; i <= 9; i++) {
    str[lastDigit] = i;
    if (isValid(str.join(""))) return str.join("");
  }

  return null;
}

console.log(makeValid("111"));
console.log(makeValid("8763"));
console.log(makeValid("2323 2005 7766 355"));