// JS210 Exercises | Easy 1
// Exercise 5 - Sum or Product of Consecutive Integers

/*
PROBLEM:
Write a program that prompts the user for an integer greater than 0 and if they
want a sum or product of all numbers between 1 and the entered integer, inclusive.

Input: Number (integer), String (sum or product)
Output: Number

Rules:
  - Prompt user for integer
  - Prompt user for either the sum or product of numbers from 1 to N, inclusive
  - Integer must be greater than 0
    - Assume all inputs for number are greater than 0
    - Assume all inputs for number will be a number (integer)
  - Assume all inputs for string will be "s" or "p" (lowercase)

TEST CASES:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.


Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

REQUIREMENTS:
  - Prompt the user for integer/string
  - SUM
    - calculate the sum of numbers from 1 to N, inclusive
    - iterate from numbers 1 to N, add it sum variable
  - PRODUCT
    - calculate the products of numbers from 1 to N, inclusive
    - iterate from number 1 to N, multiply to product variable
  - Displayed output varies based on user's input (sum or product)

DATA STRUCTURE:
  VARIABLES

INTEGER = 6
OPERATION = "p"
LET RESULT = 720;

ALGORITHM:
  INTEGER = PROMPT USER FOR AN INTEGER GREATER THAN 0
  OPERATION = PROMPT USER FOR EITHER "s" OR "p" (sum or product)

  LET RESULT;

  IF OPERATION IS "s"
    RESULT = 0;
    COMPUTE SUM OF NUMBERS FROM 1 TO N, INCLUSIVE
      FOR I = 1 -> I = N
        ADD N TO RESULT
  ELSE
    RESULT = 1;
    COMPUTER PRODUCT OF NUMBERS FROM 1 TO N, INCLUSIVE
      FOR I = 1 -> I = N
        MULTIPLY N TO RESULT

  LOG ${SUM OR PRODUCT} OF 1 TO N IS ${RESULT}
*/

let rlSync = require("readline-sync");

let integer = Number(rlSync.question("Please enter an integer greater than 0: "));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let result;

if (operation === "s") {
  result = 0;
  for (let i = 1; i <= integer; i++) result += i;
} else {
  result = 1;
  for (let i = 1; i <= integer; i++) result *= i;
}

console.log(`\nThe ${operation === "s" ? "sum" : "product"} of the integers between 1 and ${integer} is ${result}.`);