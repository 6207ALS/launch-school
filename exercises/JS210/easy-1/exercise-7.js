// JS210 Exercises | Easy 1
// Exercise 7 - Leap Years Part 1

/*
PROBLEM:
Given an integer that represents a year, return a Boolean indicating if the
year is a leap year.

Input: Number (integer)
Output: Boolean

Rules:
  - Year is a leap year if divisible by 4 AND NOT divisible by 100
  - Year is considered a leap year if divisible by 100 AND 400.
  - Return Boolean indicating if year is leap year or not
  - Assume rule applies to any year greater than 0
  - Assume argument will always be provided and aninteger.

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

REQUIREMENTS:
  - MUST PASS 1 OF TWO CONDITIONS:
    - YEAR IS DIVISIBLE BY 4 && NOT DIVISIBLE BY 100
    - YEAR IS DIVISIBLE BY 100 AND 400
  - IF YEAR PASSES 1 OF TWO CONDITIONS
    - RETURN TRUE
  - IF NOT
    - RETURN FALSE

DATA STRUCTURE:
  NUMBERS

ALGORITHM:
  IF YEAR IS DIVISIBLE BY 4 AND NOT DIVISIBLE BY 100
    RETURN TRUE
  ELSE IF YEAR IS DIVISIBLE BY 100 AND 400
    RETURN TRUE
  ELSE
    RETURN FALSE
*/

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true