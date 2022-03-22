/*
The following program prompts the user for the length and width of a room in 
meters to calculate its area. It returns the area in both square meters and 
square feet. 
*/

// prompts user for measurements
let rlSync = require('readline-sync');
let roomLength = rlSync.question("Enter the length of the room in meters:\n");
let roomWidth = rlSync.question("Enter the width of the room in meters:\n");

// calculates area in square meters and square feet
let roomAreaMeters = roomLength * roomWidth;
let roomAreaFeet = roomAreaMeters * 10.7639;

// logs calculated values to console (rounded to nearest hundredths)
console.log(`The area of the room is ${roomAreaMeters.toFixed(2)} square meters\
(${roomAreaFeet.toFixed(2)} square feet).`);