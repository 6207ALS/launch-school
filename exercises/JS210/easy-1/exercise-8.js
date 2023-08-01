// JS210 Exercises | Easy 1
// Exercise 8 - Leap Years Part 2

/*
PROBLEM:
Prior to 1752, any year divisible by 4 was considered a leap year. From 1752
and onwards, the Gregorian Calendar (previous problem) was used.
Given this information, update the isLeapYear() function and determine leap
years before and after 1752.

Input: Number (integer)
Output: Boolean

Rules:
  - Prior to 1752, any year divisible by 4 was considered a leap year
  - From 1752 and onwards, the Gregorian Calendar was used to determine if a 
    year was a leap year.
  - The Gregorian Calendar was used for the year 1752.

TEST CASE:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

REQUIREMENTS:
  - IF YEAR IS LESS THAN 1752
    - YEAR IS LEAP YEAR IF DIVISIBLE BY 4
  - IF YEAR IS GREATER OR EQUAL TO 1752
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
  IF YEAR IS GREATER OR EQUAL TO 1752
    IF YEAR IS DIVISIBLE BY 4 AND NOT DIVISIBLE BY 100
      RETURN TRUE
    ELSE IF YEAR IS DIVISIBLE BY 100 AND 400
      RETURN TRUE
    ELSE
      RETURN FALSE
  ELSE
    IF YEAR IS DIVISIBLE BY 4
      RETURN TRUE
    ELSE
      RETURN
*/

function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return year % 4 === 0;
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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true