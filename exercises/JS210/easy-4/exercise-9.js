// JS210 Exercises | Easy 4
// Exercise 9 - How Many

/*
PROBLEM:
Write a function that counts the number of occurrences of each element in a 
given array. Once counted, log each element alongside the number of 
occurrences.

Input: 1 Array
Output: Strings

Rules:
	- Assume argument will always be an array.
	- Assume all elements of array argument are strings
	- Ignore empty string elements from output count
	- Output is case-sensitive: 'Car' !== "car"
	- Whitespace should be ignored: 'C ar' === 'Car'
	- Empty array logs nothing to the console.

TEST CASES:
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'Car', 'c ar', 
									'', 'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
// console output
// Car => 1
// car => 5
// truck => 3
// SUV => 1
// motorcycle => 2


const shoes = [];

countOccurrences(shoes);
// console output

REQUIREMENTS:
	- KEEP RECORD OF UNIQUE STRING OCCURENCES
	- ITERATE THROUGH EACH ELEMENT IN ARRAY ARGUMENT
		- IF STRING EMPTY, CONTINUE TO NEXT ELEMENT
		- REMOVE WHITESPACE FROM ELEMENT
		- CHECK IF ELEMENT EXISTS IN RECORD
		- IF ELEMENT DOESNT EXIST IN RECORD
			- CREATE NEW ENTRY FOR ELEMENT, WITH COUNT OF 0
		- ELSE, INCREMENT COUNT OF ELEMENT IN RECORD


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'Car', 'c ar', 
									'', 'motorcycle', 'motorcycle', 'car', 'truck'];

record = {
	"car": 5,
	'truck': 3,
	'SUV': 1,
	'Car': 1,
	'motorcycle': 2
};

["car", 'truck', 'SUV', "Car", "motorcycle"]

"car" => 5 (record["car"] )
"truck" => 3 (record["truck"] )
"SUV" => 1 (record["SUV"] )
"Car" => 1 (record["Car"] )
"motorcycle" => 2 (record["motorcycle"] )


DATA STRUCTURE:
	- OBJECT -> KEEP RECORD OF UNIQUE ELEMENTS AND THEIR OCCURRENCES

ALGORITHM:
	LET RECORD = {};

	FOR EACH ELEMENT IN ARRAY ARGUMENT
		REMOVE WHITESPACE FROM ELEMENT
		
		IF STRING IS EMPTY
			CONTINUE

		IF ELEMENT IS NOT IN RECORD
			RECORD[ELEMENT] = 0
		
		RECORD[ELEMENT]++

	RETRIEVE KEYS OF RECORD AS ARRAY
	
	FOR EACH KEY IN ARRAY
		LOG `KEY => RECORD[KEY]`
*/

function countOccurrences(arr) {
	let result = {};

	for (let element of arr) {
		element = element.replaceAll(/\s/g, "");
		if (!element) continue;

		if (!(element in result)) {
			result[element] = 0;
		}

		result[element]++;
	}

	for (let key in result) {
		console.log(`${key} => ${result[key]}`);
	}
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'Car', 'c ar', 
									'', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);