// LS216 Practice Problems
// Ascending Consecutive Numbers

/*
https://edabit.com/challenge/jN89tuARCFbtQm6vE

PROBLEM:
Write a function that returns true if a string consists of ascending or 
ascending AND consecutive numbers.

Input: String
Output: Boolean

RULES:
	- A number can consist of any number of digits, so long as the numbers are 
		adjacent to each other, and the string has at least two of them.

	- A single number is not considered ascending numbers / ascending and consecutive numbers.
	- Argument will always be a single String.
	- String will only contain digits (0 - 9) as characters.
	- Minimum length of String will be 2 characters.
	- String can have both even length and odd length
	- String can have duplicate characters.
	- A series of ascending numbers, where some adjacent numbers are the same,
		are not considered ascending numbers.


TEST CASES:
ascending("232425") ➞ // true
// Consecutive numbers 23, 24, 25

length: 6 -> 6, 3, 2, 1

["232425"] -> skip

["232" "425"] -> return true, ascending

["23" "24" "25"] -> return true, ascending & consecutive

["2" "3" "2" "4" "2" "5"] -> nothing


ascending("2324256") ➞ // false
// No matter how this string is divided, the numbers are not consecutive.

[2324256] -> skip

[2 3 2 4 2 5 6] -> nothing
return false


ascending("444445") ➞ // true
// Consecutive numbers 444 and 445.

[444445] -> skip

[444, 445] -> true, ascending and consecutive

[44, 44, 45]	-> false, 44 -> 44 is not ascending

[4, 4, 4, 4, 4, 5] -> false, 44 -> 44 is not ascending

ascending("45") ➞ // true
// Consecutive numbers 4 and 5.



ascending("54") ➞ // false
// "Consecutive" numbers are 5 and 4, but not ascending.

ascending("454750") ➞ // true
// Ascending numbers are 45, 47, and 50

REQUIREMENTS;
	- Determine length of str argument.
	- Retrieve all factors of length (i.e. 6 -> [6, 3, 2, 1])
	- For each factor of factors,
		- Return strings sliced at every "factor" character
		- If number of sliced strings is 1, return false.
		-	Convert each substring into Numbers
		- If series of numbers are ascending, return true
	- Return false

DATA STRUCTURE:
	- ARRAYS
	- STRING

ALGORITHM:
	LET FACTORS = RETURN_FACTORS(LENGTH OF STR_ARG)

	FOR EACH FACTOR OF FACTORS
		LET NUMBERS = []
		FOR (LET I = 0; I <= LENGTH OF STR_ARG - FACTOR; I += 3)
			SLICE STR_ARG FROM [I, I + 3)
			PUSH SLICED STRING (CONVERTED INTO NUMBER) TO NUMBERS

		IF ARE_ASCENDING(NUMBERS)
			RETURN TRUE

	RETURN FALSE
*/

function ascending(str) {
	let factors = factorsOf(str.length);

	for (let factor of factors) {
		let numbers = [];
		for (let i = 0; i <= str.length - factor; i += factor) {
			numbers.push(Number(str.slice(i, i + factor)));
		}
		if (numbers.length === 1) continue;
		if (areAscending(numbers)) return true;
	}

	return false;
}

function factorsOf(num) {
	let factors = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) factors.push(i);
	}
	return factors;
}

function areAscending(num) {
	for (let i = 1; i < num.length; i++) {
		let previous = num[i - 1];
		let current = num[i];
		if (current <= previous) return false;
	}

	return true;
}

p = console.log;

p(ascending("232425")) // ➞ true
// Consecutive numbers 23, 24, 25

p(ascending("2324256")) // ➞ false
// No matter how this string is divided, the numbers are not consecutive.

p(ascending("444445")) // ➞ true
// Consecutive numbers 444 and 445.

p(ascending("45")) // ➞ true
// Consecutive numbers 4 and 5.