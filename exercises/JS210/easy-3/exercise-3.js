// JS210 Exercises | Easy 3
// Exercise 3 - When Will I Retire

/*
PROBLEM:
Build a program that logs when the user will retire and how many more years the 
user has to work until retirement.

Input: 2 Numbers
Output: String

Rules:
	- Do not worry about retrieving current year
		- Output message can have fixed number for current year.
	- Assume retirement age will always be greater OR EQUAL than user's current age
	- Assume user will always provide valid inputs (numbers)

TEST CASE:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

REQUIREMENTS:
	- PROMPT USER FOR CURRENT AGE
	- PROMPT USER FOR RETIREMENT AGE
	- DISPLAY CURRENT YEAR
	- DISPLAY RETIREMENT YEAR
		- CALCULATE THE RETIREMENT YEAR
			- CURRENT_YEAR + (RETIREMENT_AGE - CURRENT_AGE)
	- DISPLAY HOW MANY YEARS USER HAS TO WORK UNTIL RETIREMENT
		- (RETIREMENT_AGE - CURRENT_AGE)

DATA STRUCTURE:
	VARIABLES

ALGORITHM:
	CONST CURRENT_YEAR = 2023
	LET CURRENT_AGE = PROMPT USER FOR CURRENT AGE

	LET RETIREMENT_AGE = PROMPT USER FOR RETIREMENT AGE
	LET RETIREMENT_YEAR = CURRENT_YEAR + (RETIREMENT_AGE - CURRENT_AGE)
	LET YEARS_LEFT = (RETIREMENT_AGE - CURRENT_AGE)

	LOG CURRENT YEAR AND RETIREMENT YEAR
	LOG YEARS_LEFT
*/

let rlSync = require("readline-sync");

const CURRENT_YEAR = 2023;
let currentAge = Number(rlSync.question("What is your age? "));
let retirementAge = Number(rlSync.question("At what age would you like to retire? "));

let retirementYear = CURRENT_YEAR + (retirementAge - currentAge);
let yearsLeft = retirementAge - currentAge;

console.log(`\nIt's ${CURRENT_YEAR}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);