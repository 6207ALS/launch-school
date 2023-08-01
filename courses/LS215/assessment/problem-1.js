// LS216 Assessment - Interview Practice Problems: Asking Questions
// Problem 1

/*
PROBLEM:
Given an array of strings, arr, and an integer, k, return the kth distinct 
string present in arr.

Input: Array, Number
Output: String

Rules:
	- A distinct string is a string that is present only once in an array.
		- is case-sensitive
		- is whitespace-sensitive
	- If there are fewer than k distinct strings, return an empty string ""
	- Assume the arguments will always be an array of strings and a number
		- Assume array will never be empty
		- Assume array will not be sparse ([1,,3,4])
		- Elements of array will always be non-empty strings.
		- Assume the number argument will always be a positive integer.

TEST CASES:
distinctString(["d","b","c","b","c","a"], 2); // "a"
distinctString(["d","b","c","B","c","a"], 2); // "b"
distinctString(["d","b","c","b","c","a"], 3); // ""
distinctString(["down","Bee","crown","bee","crown","apple"], 2); // "Bee"
distinctString(["down","be e","crown","bee","crown","apple"], 2); // "b ee"

REQUIREMENTS:
	- Identify distinct strings in array
		- Picking out strings that occur only once in the array
		- Comply with implementation constraints
		- Keep the distinct strings in order of their appearance in array (left->right)
	- kth distinct string is output

DATA STRUCTURE:
	- ARRAY -> Abstraction Methods (Filter)
	- OBJECT -> Keep tally of number of occurrences

ALGORITHM:
	LET DISTINCT = FILTER ARRAY BY DISTINCT STRINGS
		- ARRAY.FILTER
		- CALLBACK FUNCTION ->
			- FILTER THE ARRAY ARGUMENT WITH ONLY THE CURRENT ELEMENT
			- DETERMINE IF THE FILTERED ARRAY IS LENGTH OF 1

	RETURN KTH ELEMENT IN DISTINCT ARRAY || ""
*/

function distinctString(arr, k) {
	let distinct = arr.filter(str => {
		let filteredStr = arr.filter(element => str === element);
		return filteredStr.length === 1;
	});

	return distinct[k - 1] || "";
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["d","b","c","B","c","a"], 2)); // "b"
console.log(distinctString(["d","b","c","b","c","a"], 3)); // ""
console.log(distinctString(["down","Bee","crown","bee","crown","apple"], 2)); // "Bee"
console.log(distinctString(["down","be e","crown","bee","crown","apple"], 2)); // "b ee"