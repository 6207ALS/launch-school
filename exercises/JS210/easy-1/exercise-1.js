// JS210 Exercises | Easy 1
// Exercise 1 - Odd Numbers

/*
PROBLEM:
Log all odd numbers from 1 to 99, inclusive, each being on their own line.

RULES:
  - Logged numbers should odd.
  - Each logged number should be on their own line.
  - Log odd numbers 1 - 99, inclusive.

REQUIREMENTS:
  - Iterate through all odd numbers from 1 - 99, inclusive
    - for-loop
    - starting from 1, increment 2, all the way to 99
      - log each number
  - Log each number on their own line
    - console.log()

DATA STRUCTURE:
  FOR-LOOP
  NUMBERS

1
3
5
7
9
11

ALGORITHM:
  FROM 1 TO 99 (INCLUSIVE), INCREMENT BY 2
    LOG NUMBER
*/

function oddNumbers() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

oddNumbers();