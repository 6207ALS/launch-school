// JS210 Exercises | Easy 3
// Exercise 1 - How Old is Teddy?

/*
PROBLEM:
Build a program that randomly generates Teddy's age, and logs it to the console. 

Input: nothing
Output: String (message logged to console)

Rules:
	- Age should be a random number between 20 and 200 (inclusive).
	- Age should be different every time program is run.

TEST CASES:

Teddy is 69 years old!
Teddy is 20 years old!
Teddy is 200 years old!
Teddy is 124 years old!

REQUIREMENTS:
	- String template: "Teddy is [age] years old!"
	- Generate a random number [20, 200] every time program runs
	- Inject generated number into string template

DATA STRUCTURE:
	STRING, NUMBERS

ALGORITHM:
	LET AGE = RANDOM NUMBER FROM [20, 200]

	LOG `Teddy is [AGE] years old!` TO THE CONSOLE
*/

let age = Math.floor(Math.random() * 181) + 20;
console.log(`Teddy is ${age} years old!`);