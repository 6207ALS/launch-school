// JS210 Exercises | Easy 2
// Exercise 8 - Grade Book

/*
PROBLEM:
Write a function that determines the mean (average) of the three scores passed 
to it, and returns the letter associated with that grade.

Input: 3 Numbers
Output: String

Rules:
  - All provided values are between 0 and 100, inclusive
  - Do not check for negative values or values greater than 100
  - Assume arguments for the function will be exactly 3 numbers.
  - 90 <= score <= 100: 'A'
  - 80 <= score < 90: 'B'
  - 70 <= score < 80: 'C'
  - 60 <= score < 70: 'D'
  - 0 <= score < 60: 'F'

TEST CASES:
getGrade(95, 90, 93);    // "A"
(95 + 90 + 93) / 3 =? 278 / 3 = 92....

getGrade(50, 50, 95);    // "D"
65 -> "D"

REQUIREMENTS:
  - Calculate the average of 3 numbers
    - (sum of three numbers) / 3
  - Determine the letter associated with the average
    - series of conditions, each checking if average is in a certain range
    - each condition returns the letter associated with that grade range

DATA STRUCTURE:
  VARIABLES

ALGORITHM:
  LET AVERAGE = AVERAGE OF ALL THREE NUMBER ARGUMENTS
  (NUM-1 + NUM-2 + NUM-3) / 3

  IF AVERAGE BETWEEN [90 - 100]
    RETURN "A"
  ELSE IF AVERAGE BETWEEN [80, 90)
    RETURN "B"
  ELSE IF AVERAGE BETWEEN [70, 80)
    RETURN "C"
  ELSE IF AVERAGE BETWEEN [60, 70)
    RETURN "D"
  ELSE
    RETURN "F"
*/

function getGrade(g1, g2, g3) {
  let average = (g1 + g2 + g3) / 3;

  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"