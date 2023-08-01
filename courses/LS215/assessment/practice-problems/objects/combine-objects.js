// LS216 Practice Problems
// Combining two objects into one, sum like values

/*
https://edabit.com/challenge/JyebLWZjCv5jYhrBW

PROBLEM:
Take two objects with similar key values and combine them into a new object 
summing any values that belong to the same category.

Input: Object, Object
Output: Object

Rules:
	- In the output object, combine the values for any common properties.
	- Assume arguments for function will always be two objects.
	- Assume object arguments could be empty.
	- Assume object values will always be a Number (integer or decimal)
	- Common properties are case-sensitive and whitespace sensitive
		- Must be strictly equal
	- Object properties will always be non-empty strings.
	- Objects can be mutated, if needed.

TEST CASES:
const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

output ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}

//
const user3 = {
  powerPlant: 70000
}

const user4 = {
  teaching: 40000
}

output ➞ {
  powerPlant: 70000,
  teaching: 40000,
}

//
const user5 = {
  rental: 2000,
	business: 5000
}

const user6 = {
  rental: 3000,
	business: 4000
}

output ➞ {
  rental: 5000,
	business: 9000
}

//
const user7 = {}
const user8 = {}
output ➞ {}

// 
const user9 = {}
const user10 = {
  rental: 3000,
	business: 4000
}

output ➞ {
  rental: 5000,
	business: 9000
}

REQUIREMENTS:
	- Initialize empty object as output object
	- Iterate through properties of obj1
		- If property doesn't exist in obj2, copy property as is to output object
		- If property does exist in obj2, assign property with sum of values to output object
	
	- Iterate through properties of obj2
		- If property doesn't exist in obj1, copy proerty as is to output object
		- If property does exist in obj1, skip

DATA STRUCTURE:
	Objects
	Array - Object.keys

ALGORITHM:
	LET RESULT = {};
	
	FOR EACH PROPERTY OF OBJ1
		IF PROPERTY IN OBJ2
			RESULT[PROPERTY] = OBJ1[PROPERTY] + OBJ2[PROPERTY]
		ELSE
			RESULT[PROPERTY] = OBJ1[PROPERTY]

	FOR EACH PROPERTY OF OBJ2
		IF PROPERTY IN OBJ1
			CONTINUE TO NEXT PROPERTY
		ELSE
			RESULT[PROPERTY] = OBJ2[PROPERTY]

	RETURN RESULT
*/

function combine(user1Income, user2Income) {
	let result = {};

	for (let income in user1Income) {
		if (income in user2Income) {
			result[income] = user1Income[income] + user2Income[income];
		} else {
			result[income] = user1Income[income];
		}
	}

	for (let income in user2Income) {
		if (income in user1Income) {
			continue;
		} else {
			result[income] = user2Income[income];
		}
	}

	return result;
}

p = console.log;

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

p(combine(user1, user2));
// output ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }

//
const user3 = {
  powerPlant: 70000
}

const user4 = {
  teaching: 40000
}

p(combine(user3, user4));
// output ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
// }

//
const user5 = {
  rental: 2000,
	business: 5000
}

const user6 = {
  rental: 3000,
	business: 4000
}

p(combine(user5, user6));
// output ➞ {
//   rental: 5000,
// 	business: 9000
// }

//
const user7 = {}
const user8 = {}

p(combine(user7, user8));
// output ➞ {}

// 
const user9 = {}
const user10 = {
  rental: 3000,
	business: 4000
}

p(combine(user9, user10));
// output ➞ {
//  rental: 5000,
// 	business: 9000
// }