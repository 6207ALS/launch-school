// JS210 Exercises | Easy 1
// Exercise 3 - How Big is the Room

/*
PROBLEM:
Build a program that prompts the user for the dimensions of a room (in meters)
and log the area of the room in both square meters and square feet.

Input: Number, Number
Output: Number

Rules:
  - Prompt the user for the length AND width of the room (in meters)
  - Log the area of the room in square meters AND square feet
    - 1 square meter = 10.7639 square feet
  - Do not worry about validating user input.
  - Use the readlineSync.prompt method to prompt user.

  - Round both values to nearest hundredths
  - Accept user input on the line after prompt

TEST CASES:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

REQUIREMENTS:
  - prompt user of length/width of room in meters
    - readlineSync.prompt() method
  - calculate area room in both square meters AND square feet
  - log area to console

DATA STRUCTURE:
  VARIABLES

ALGORITHM:
  LENGTH = PROMPT USER FOR LENGTH OF ROOM (IN METERS)
  WIDTH = PROMPT USER FOR WIDTH OF ROOM (IN METERS)

  AREA_IN_METERS^2 = LENGTH * WIDTH
  AREA_IN_FEET^2 = AREA_IN_METERS * 10.7639

  LOG BOTH AREAS TO CONSOLE (ROUNDED)
*/

let rlSync = require("readline-sync");

console.log("Enter the length of the room in meters:");
let length = Number(rlSync.prompt());

console.log("Enter the width of the room in meters:")
let width = Number(rlSync.prompt());

let areaSquareMeter = (length * width).toFixed(2);
let areaSquareFeet = ((length * width) * 10.7639).toFixed(2);

console.log(`The area of the room is ${areaSquareMeter} square meters (${areaSquareFeet} square feet).`);