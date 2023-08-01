// LS216 Assessment - Interview Practice Problems: Asking Questions
// Problem 3

/*
PROBLEM:
Write a function, primeNumberPrinter, that prints all prime numbers present as
substrings in a given string.

Input: String
Output: Array (of Numbers)

Rules:
	- Prime number: a number with only 2 factors: 1 and itself (excluding 1)
	- Substring: a sequence of characters (1 or more) within a string.
		- A valid substring (in this problem) should be a sequence of digits 
			surrounded by non-digit character
		- Do not consider substrings of the substring as numbers
	- Assume function will always be provided a single argument, a string
	- Empty string argument should return empty array
	- String without any numbers or prime numbers, should return empty array

TEST CASES:
	primeNumberPrinter("a4bc2k13d"); 		 // [2, 13]
	primeNumberPrinter(""); 				 		 // []
	primeNumberPrinter("abcdefgh");  		 // []
	primeNumberPrinter("37"); 		   		 // [37]
	primeNumberPrinter("37ab23"); 		   // [37, 23]
	primeNumberPrinter("37$a23"); 		   // [37, 23]

REQUIREMENTS:
	- extract all substrings that are a sequence of 1 or more digits surrounded by
		non-digit characters into an array
	- filter out non-prime numbers from array

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	LET RESULT = extract all substrings that are a sequence of 1 or more digits 
							 into an array

	FILTER RESULT BY PRIME NUMBERS ONLY
		- determine all factors of number
		- number is prime number if number of factors = 2 (1 and itself)
	RETURN RESULT
*/

function primeNumberPrinter(str) {
	let numbers = (str.match(/\d+/g) || []).map(element => Number(element));
	let primeNumbers = numbers.filter(isPrimeNumber);	
	return primeNumbers;
}

function isPrimeNumber(number) {
	let factors = [];

	for (let i = 1; i <= number; i++) {
		if (number % i === 0) factors.push(i);
	}

	return factors.length === 2;
}

console.log(primeNumberPrinter("a4bc2k13d")); 		 	// [2, 13]
console.log(primeNumberPrinter("")); 				 		 		// []
console.log(primeNumberPrinter("abcdefgh"));  		  // []
console.log(primeNumberPrinter("37")); 		   		 		// [37]
console.log(primeNumberPrinter("37ab23")); 		   		// [37, 23]
console.log(primeNumberPrinter("37$a23we2fe14"));   // [37, 23]



