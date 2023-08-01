// JS210 Exercises | Easy 2
// Exercise 7 - Double Doubles

/*
PROBLEM:
Write a function that returns the number provided as an argument multiplied by 
two, unless the argument is a double number; otherwise, return the double number 
as-is.

Input: Number (integer)
Output: Number

RULES:
  - Double Number: Even-length number whose left-side digits are exactly the
    same as its right side digits.
  - Return argument as is if it is a double number
  - Return argument multiplied by two otherwise
  - Assume all arguments are integers.

TEST CASES:
twice(37);          // 74
3 !== 7

twice(44);          // 44
4 === 4

twice(334433);      // 668866
334 !== 433

twice(444);         // 888
Not even length # 

twice(107);         // 214
Not even length #

twice(103103);      // 103103
103 === 103

twice(3333);        // 3333
33 === 33

twice(7676);        // 7676
76 === 76 

twice(0);           // 0
Not even length #

REQUIREMENTS:
  - Determine if the number is even-length or odd-length
    - if odd-length, return argument doubled
    - if even-length, continue and determine if the number is a double number

  - Determine if the number is a double number
    - Split the number by its left digits and right digits and compare them
    - If the left digits are === to right digits, return argument as is
    - If the left digits are !== to right digits, return argument multiplied by 2

DATA STRUCTURE:
  OPTIONS: 
    NUMBER AS STRINGS -> COMPARING TWO VALUES
    NUMBER INTO ARRAY 

ALGORITHM:
  IF NUMBER IS ODD LENGTH
    RETURN NUMBER X 2
  
  LET LEFT_DIGITS = SLICE NUMBER FROM INDEX 0 - MIDDLE_INDEX
  LET RIGHT_DIGITS = SLICE NUMBER FROM MIDDLE_INDEX TO END

  IF LEFT_DIGITS IS EQUAL TO RIGHT_DIGITS
    RETURN NUMBER ARGUMENT AS IS
  ELSE
    RETURN NUMBER X 2
*/

"0123"

function twice(num) {
  if (String(num).length % 2 === 1) return num * 2;

  let middleIndex = String(num).length / 2;
  let leftDigits = String(num).slice(0, middleIndex);
  let rightDigits = String(num).slice(middleIndex);

  if (leftDigits === rightDigits) {
    return num;
  } else {
    return num * 2;
  }
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


