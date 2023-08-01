// LS216 Practice Problems
// Splitting Objects Inside an Array

/*
https://edabit.com/challenge/FrFkH5BPnqz4pYpqD

PROBLEM:
Create a function that splits a bunch of fruit into singular objects inside an 
array.

Input: Array (of Object(s))
Output: Array (of Object(s))

Rules:
	- The input array will never be empty.
	- Objects will always have a "name" and "quantity" properties.
		- Value of "name" property will always be a non-empty string.
		- Value of "quantity" property will always be a positive integer.
	- The returned object should have each fruit in the same order as the 
		original.
	- Non-primitive data types can be mutated if needed.
	- Array argument can have duplicate fruit objects ("name" property are the same)
		- "name" property is case-sensitive and whitespace-sensitive
		- Treat each object as unique values.
	- Array argument will never be sparse.

TEST CASES:
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]

splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]

splitBunches([
  { name: "currants", quantity: 1 },
  { name: "Grapes", quantity: 2 },
	{ name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 2 }
]

splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grap es", quantity: 2 },
	{ name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 2 }
]

REQUIREMENTS:
	- Initialize result array 
	- Iterate through objects of array argument
		- For "quantity" number of times, push the food object to result array
			- each food item has "name" of current food and "quantity" of 1

DATA STRUCTURE:
	Array -> Abstraction methods (forEach)
	Object

ALGORITHM:
	LET RESULT = [];

	FOR EACH OBJECT IN ARRAY ARGUMENT
		FOR OBJECT'S "quantity" NUMBER OF TIMES
			LET FOOD_ITEM = {
				name: OBJECT'S "food" PROPERTY
				quantity: 1
			}

			PUSH FOOD_ITEM TO RESULT
	
	RETURN RESULT;
*/

function splitBunches(foods) {
	let result = [];
	
	for (let food of foods) {
		for (let i = 0; i < food["quantity"]; i++) {
			let foodItem = { name: food["name"], quantity: 1 };
			result.push(foodItem);
		}
	}

	return result;
}

p = console.log;

p(splitBunches([
  { name: "grapes", quantity: 2 }
]));

p(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]));

p(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "Grapes", quantity: 2 },
	{ name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 2 }
]));

p(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grap es", quantity: 2 },
	{ name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 2 }
]));