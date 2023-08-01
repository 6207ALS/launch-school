// JS210 Exercises | Easy 1
// Exercise 2 - Even Numbers

/*
PROBLEM:
Log all even numbers from 1 to 99, inclusive, each being on their own line.

RULES:
  - Logged numbers should even.
  - Each logged number should be on their own line.
  - Log even numbers 1 - 99, inclusive.

REQUIREMENTS:
  - Iterate through all even numbers from 1 - 99, inclusive
    - for-loop
    - starting from 2, increment 2, all the way to 99
      - log each number
  - Log each number on their own line
    - console.log()

DATA STRUCTURE:
  FOR-LOOP
  NUMBERS

2
4
6
8

ALGORITHM:
  FROM 2 TO 99 (INCLUSIVE), INCREMENT BY 2
    LOG NUMBER
*/

function evenNumbers() {
  for (let i = 2; i <= 99; i += 2) {
    console.log(i);
  }
}

evenNumbers();