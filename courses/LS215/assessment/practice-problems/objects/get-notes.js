// LS216 Practice Problems
// Get notes distribution

/*
https://edabit.com/challenge/WyEL2YcemhrS4waEE

PROBLEM:
Create a function that takes an array of students and returns an object 
representing their notes distribution.

Input: Array (of Objects)
Output: Object

Rules:
	- All invalid notes should not be counted in the distribution.
		- Valid notes are: 1, 2, 3, 4, 5
	- Assume the function will always be provided a single array as an argument.
		- Assume the array will only contain objects
		- Assume the array will never be sparse
		- Empty array argument should return empty object.
	- Assume the objects in array argument will always have a "notes" property.
		- Assume the "notes" property will always be an array of Numbers.
		- Assume the array will never be sparse.
		- Assume the Numbers wil always be integers (postive, negative, 0).
		- Array could be empty.
	- Assume the "name" properties of the objects will always be unique.
	- The output object's keys should be the "note" (Number)
	- The output object's values should be the number of times the "note" occurs 
		(Number)

TEST CASES:

getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
])

getNotesDistribution([
  {
    "name": "Steve",
    "notes": [-1, 6]
  },
  {
    "name": "John",
    "notes": [0, -3]
  }
])

getNotesDistribution([
  {
    "name": "Steve",
    "notes": []
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
])

getNotesDistribution([
  {
    "name": "Steve",
    "notes": []
  },
  {
    "name": "John",
    "notes": []
  }
])

getNotesDistribution([])


REQUIREMENTS;
	- Initialize "distribution" object
	- Iterate through objects of array argument.
	- Iterate through objects' "notes" property array
		- Check if valid value (1, 2, 3, 4, 5)
		- Keep count of occurrences for each VALID value in "distribution" object

DATA STRUCTURE:
	Array -> Abstraction Methods
	Object

ALGORITHM:
	LET DISTRIBUTION = {}

	FOR EACH STUDENT IN ARRAY ARG
		FOR EACH NOTE IN STUDENT["notes"] ARRAY
			IF NOTE IN [1, 2, 3, 4, 5]
				IF NOTE IS NOT A PROPERTY IN DISTRIBUTION
					DISTRIBUTION[NOTE] = 0
				DISTRIBUTION[NOTE]++
		
	RETURN DISTRIBUTION
*/

function getNotesDistribution(students) {
	let distribution = {};

	for (let student of students) {
		for (let note of student["notes"]) {
			if ([1, 2, 3, 4, 5].includes(note)) {
				if (!distribution[note]) distribution[note] = 0;
				distribution[note]++;
			}
		}
	}

	return distribution;
}
 
p = console.log;

p(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]))

p(getNotesDistribution([
  {
    "name": "Steve",
    "notes": []
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]))

p(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [-1, 6]
  },
  {
    "name": "John",
    "notes": [0, -3]
  }
]))

p(getNotesDistribution([
  {
    "name": "Steve",
    "notes": []
  },
  {
    "name": "John",
    "notes": []
  }
]))

p(getNotesDistribution([]))