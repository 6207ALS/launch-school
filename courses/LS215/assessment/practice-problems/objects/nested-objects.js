// LS216 Practice Problems
// Playing with Nested Objects

/*
https://edabit.com/challenge/eARWGdpymGeNQiHBi

PROBLEM:
Create a function that takes an object and returns an object of all entries 
having unique marks.

Input: Object
Output: Object

Rules:
	- If two or more marks are the same, take who is eldest.
		- No two marks with the same score will have the same age.
	- Assume the argument will always be an object.
		- If object is empty, return an empty object.
		- Assume keys of the object will always be integers greater or equal to 0
		- Assume values of the object will always be an object with 3 properties:
			- "age"
				- value is always an integer greater or equal to 0.
			- "name"
				- value is a non-empty String.
				- duplicate names can exist across Object argument
					- duplicates will never have same age
			- "marks"
				- value is always a non-empty number String
					- number String will always be greater or equal to 0.
	- Non-primitive data types can be mutated, if needed. 
	

TEST CASES:
getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) 

// ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '0'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
})

// ➞ {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '0'},
//   3: {age: 16, name: 'john', marks: '250'}
// }

getObject({
  5: {age: 15, name: 'julie', marks: '250'}
})

// ➞ {
// 	5: {age: 15, name: 'julie', marks: '250'}
// }

getObject({})
// ➞ {}

REQUIREMENTS:
	- initialize result object to record unique marks in object argument
	- retrieve all unique marks in object argument into array
	- for each unique mark, retrieve all keys in object argument whose
		mark is equal to current mark
		- determine the highest age out of the filtered people
		- push object with the highest age to the result object

DATA STRUCTURE:
	ARRAY -> abstraction methods (map, filter)

ALGORITHM:
	LET RESULT = {}

	LET VALUES = VALUES OF OBJECT ARGUMENT INTO ARRAY
	LET MARKS = "VALUES" ARRAY WITH EACH ELEMENT MAPPED TO ITS "marks" property
	LET UNIQUE_MARKS = MARKS FILTERED BY UNIQUE VALUES

	FOR I IN RANGE OF 0 TO (LENGTH OF UNIQUE_MARKS - 1)
		LET MARK_KEYS = ALL KEYS IN OBJECT ARGUMENT WHOSE MARK IS EQUAL TO CURRENT MARK
		LET AGES = "MARK_KEYS" ARRAY WITH EACH ELEMENT MAPPED TO ITS "age" PROPERTY VALUE
		LET HIGHEST_AGE = HIGHEST VALUE IN "AGES" ARRAY

		LET ELDEST = FILTER MARK_KEYS WITH THE PERSON WITH HIGHEST_AGE

		RESULT[i] = obj[ELDEST]

	RETURN RESULT
*/

function getObject(obj) {
	let result = {};
	let values = Object.values(obj);
	let marks = values.map(value => value["marks"]);
	let uniqueMarks = marks.filter((mark, index) => marks.indexOf(mark) === index);

	for (let i = 0; i < uniqueMarks.length; i++) {
		let mark = uniqueMarks[i];
		let markKeys = Object.keys(obj).filter(key => obj[key]["marks"] === mark);
		let ages = markKeys.map(key => obj[key]["age"]);
		let highestAge = Math.max(...ages);
		let eldestKey = markKeys.filter(key => obj[key]["age"] === highestAge)[0];
		
		result[i] = obj[eldestKey];
	}

	console.log(result);
}

getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) 

// ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '0'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
})

// ➞ {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '0'},
//   3: {age: 16, name: 'john', marks: '250'}
// }

getObject({
  0: {age: 15, name: 'julie', marks: '250'}
})

// ➞ {
// 	0: {age: 15, name: 'julie', marks: '250'}
// }

getObject({})
// ➞ {}