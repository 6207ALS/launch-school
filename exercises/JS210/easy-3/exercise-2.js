// JS210 Exercises | Easy 3
// Exercise 2 - Searching 101

/*
PROBLEM:
Write a program that solicits six numbers from the user and logs a message that 
describes whether the sixth number appears among the first five numbers.

Input: 6 Numbers
Output: String

Rules:
	- Prompt user for 6 inputs
	- Assume user will always provide 6 numbers
	- Output message should display the first 5 numbers
		-	and state whether or not the 6th number appears in those 5 numbers
	- 6th number being a "substring" of any of first 5 numbers does not count

TEST CASES:
EXAMPLE 1:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

EXAMPLE 2:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].

REQUIREMENTS:
	- Prompting user for each number individually
	- Numbers displayed in output message should be same order in which they were 
		prompted
	- Determine if 6th number is same/equal as one of the first 5 numbers
		- if it is, state that the 6th number appears in first 5 numbers
		- if not, state that the number doesn't

DATA STRUCTURE:
	- ARRAY -> TO MAINTAIN ORDER OF RECORDED DATA

ALGORITHM:
	LET NUMBERS = [];

	PROMPT USER FOR NUM1, PUSH VALUE TO NUMBERS
	PROMPT USER FOR NUM2, PUSH VALUE TO NUMBERS
	PROMPT USER FOR NUM3, PUSH VALUE TO NUMBERS
	PROMPT USER FOR NUM4, PUSH VALUE TO NUMBERS
	PROMPT USER FOR NUM5, PUSH VALUE TO NUMBERS
	LET NUM6 = PROMPT USER FOR NUM6

	DETERMINE IF NUM6 IS EQUAL TO ONE OF ELEMENT IN NUMBERS
	IF NUM6 IS IN NUMBERS
		LOG "NUM6 APPEARS IN NUMBERS"
	ELSE
		LOG "NUM6 DOES NOT APPEAR IN NUMBERS"
*/
let rlSync = require("readline-sync");

let numbers = [];

numbers.push(rlSync.question("Enter the 1st number: "));
numbers.push(rlSync.question("Enter the 2nd number: "));
numbers.push(rlSync.question("Enter the 3rd number: "));
numbers.push(rlSync.question("Enter the 4th number: "));
numbers.push(rlSync.question("Enter the 5th number: "));
let num6 = rlSync.question("Enter the last number: ");

if (numbers.includes(num6)) {
	console.log(`\nThe number ${num6} appears in [${numbers.join(", ")}].`);
} else {
	console.log(`\nThe number ${num6} does not appear in [${numbers.join(", ")}].`);
}