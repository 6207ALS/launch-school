// LS216 Practice Problems
// First Recurrence Index

/*
https://edabit.com/challenge/y8fTF8GBMAXTdkrkH

PROBLEM:
Create a function that identifies the very first item that has recurred in the 
string argument passed. 

Input: String
Output: Object

Rules:
	- The returned Object should have the recurring item as the key and an array 
		as the value.
		- The array should contain two numbers:
			- The first number represents the index of the string where the recurring
				item FIRST appeared.
			- The second number represents the index of the string where the recurring
				item resurfaced.
	- The return value should be empty object if the passed argument is either 
		null, undefined, empty string, or no recurring item exists.
		- Any other input data type should return undefined.
	- An item is defined as ANY character - letters, digits, special characters, etc.
		- Recurring items are case-sensitive: "b" !== "B"

TEST CASES:
recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

OCCURENCES
D: 2
X: 1
T: 1

INDEXES
D: [0, 3]
X: [1]
T: [2]

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

OCCURENCES
Y: 1
X: 2
Z: 1

INDEXES
Y: [0]
X: [1, 3]
Z: [2]

recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}
OCCURENCES:
Y: 1
Z: 1
T: 2

INDEXES:
Y: [0]
Z: [1]
T: [2, 3]

recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

recurIndex("") ➞ {}

recurIndex(null) ➞ {}

recurIndex(true) ➞ {}

recurIndex({}) ➞ {}

REQUIREMENTS:
	- Initialize object to keep record of occurrences for each unique character in
		string argument
	- Initialize object to keep record of the indexes for each unique character
	- Iterate through each character of string argument
		- Keep record of unique characters, their number of occurrences, and their
			indexes
	- If a number of occurrences for a given character is 2, return that character
		along with their indexes in the string.

DATA STRUCTURE:
	Object
	Array -> Abstraction method (forEach)

- The return value should be empty object if the passed argument is either 
		null, undefined, empty string, or no recurring item exists.


ALGORITHM:
	IF ARGUMENT IS NULL, UNDEFINED, EMPTY STRING
		RETURN {}

	IF ARGUMENT IS NOT A STRING
		RETURN UNDEFINED

	LET COUNT = {}
	LET INDEXES = {}

	FOR EACH CHARACTER IN STRING ARGUMENT
		IF CHARACTER DOES NOT EXIST AS PROPERTY IN "COUNT"
			CREATE NEW PROPERTY IN "COUNT" WITH CHARACTER AS KEY AND VALUE AS 0
			CREATE NEW PROPERTY IN "INDEXES" WITH CHARACTER AS KEY AND VALUE AS []

		COUNT[CHARACTER]++
		PUSH CURRENT INDEX TO INDEXES[CHARACTER] 

		IF COUNT[CHARACTER] VALUE IS 2
			RETURN { CHARACTER: INDEXES[CHARACTER] }

	RETURN {};
*/

function recurIndex(str) {
	if (str === null || str === undefined || str === "") return {};
	if (typeof str !== "string") return undefined;

	let count = {};
	let indexes = {};

	str = str.split("");
	
	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (!(count.hasOwnProperty(char))) {
			count[char] = 0;
			indexes[char] = [];
		}

		count[char]++;
		indexes[char].push(i);

		if (count[char] === 2) {
			let first = {};
			first[char] = indexes[char];
			return first;
		};
	};

	console.log(count);

	return {};
}

p = console.log;

p(recurIndex("DXTDXTXDTXD")); // ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

p(recurIndex("YXZXYTUVXWV")); 		// ➞ {"X": [1, 3]}
p(recurIndex("YZTTZMNERXE")); 		// ➞ {"T": [2, 3]}
p(recurIndex("AREDCBSDERD")); 		// ➞ {"D": [3, 7]}
p(recurIndex(""));   							// ➞ {}
p(recurIndex(null));							// ➞ {}
p(recurIndex(true));						  // ➞ undefined
p(recurIndex({})); 	   						// ➞ undefined

