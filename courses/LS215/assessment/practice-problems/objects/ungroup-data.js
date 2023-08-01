// LS216 Practice Problems
// Ungroup Data in an Object

/*
https://edabit.com/challenge/NcRsSwrJbMm4dRbCk

PROBLEM:
Create a function that will ungroup every student so you can look at their 
details individually.

Input: Array (of Objects)
Output: Array (of Objects)

Rules:
	- Assume argument will always be a single array of objects.
		- Array argument will never be sparse
		- Array argument will always have the "teacher" and "data" properties
			- "teacher" property will always be a non-empty string.
				- No two objects will have the same value for the "teacher" property
			- "data" property will always be an array of objects
				- objects in array will always have at least a "name" property with a
					value of a non-empty string.
				- may contain other properties with non-primitive/primitive data types
				- 
	- Assume argument will always be provided.
	- Empty array argument should return empty array.
	- Any non-primitive data types such as arrays and objects CANNOT be mutated.
		- Any array will not be sparse.
	- Output array should be an array of objects
		- Each object representing the objects in the "data" property array
		- Objects can either be a clone or reference of original objects
		- Each object has the "teacher" property
			- value being the "teacher" property from the object it was nested in
		- Each object has the "name" property
			- value being the "name" property from the original object
		- Each object has any other properties it had from the original object

TEST CASES:

ungroupStudents(
[
	{
	  teacher: "Ms. Car",
	  data: [
			{
	     name: "James",
	     emergenceNumber: "617-771-1082",
	  	}, 
			{
	     name: "Alice",
	     alergies: ["nuts", "carrots"],
			}
		],
	}, 
	{
	  teacher: "Mr. Lamb",
	  data: [
			{
		    name: "Aaron",
		    age: 3
	  	},
		]
	}
])

[
	{
		name: "James",
		emergenceNumber: "...",
		teacher: "Ms. Car"
	},
	{
		name: "Alice",
		alergies: [...],
		teacher: "Ms. Car"
	}
	{
		name: "Aaron",
		age: 3,
		teacher: "Ms. Lamb"
	}
]

// [
// 	{
// 	  teacher: "Ms. Car",
// 	  name: "James",
// 	  emergencyNumber: "617-771-1082",
// 	}, 
// 	{
// 	  teacher: "Ms. Car",
// 	  name: "Alice",
// 	  alergies: ["nuts", "carrots"],
// 	}, 
// 	{
// 	  teacher: "Mr. Lamb",
// 	  name: "Aaron",
// 	  age: 3,
// 	}
// ]
		
ungroupStudents(
[
	{
	  teacher: "Ms. Car",
	  data: [],
	}, 
	{
	  teacher: "Mr. Lamb",
	  data: [
			{
		    name: "Aaron",
		    age: 3
	  	},
		]
	}
])

ungroupStudents(
[
	{
	  teacher: "Ms. Car",
	  data: [],
	}, 
	{
	  teacher: "Mr. Lamb",
	  data: []
	}
])

ungroupStudents([])	

REQUIREMENTS:
	- Initialize empty array for ungrouped data
	- Iterate through objects of array argument
	- Iterate through objects in object's "data" property array.
		- For each object, copy the properties to a new object
		- Assign the "teacher" property to the new object, value being the iterated
			object's "teacher" property
		- Push new object to the empty array

DATA STRUCTURE:
	- Array -> Abstraction methods
	- Objects -> Object.keys(), Object.values() 

ALGORITHM:
	LET RESULT = []

	FOR EACH OBJECT IN ARRAY ARGUMENT
		FOR EACH OBJECT IN ARRAY ARGUMENT'S "data" PROPERTY
			LET NEW_OBJ = {};
			LET OBJECT_KEYS = KEY VALUES OF "data" OBJECT
			FOR EACH KEY IN OBJECT_KEYS
				NEW_OBJ[KEY] = "data" [KEY] VALUE
			NEW_OBJ["teacher"] = "data" ["teacher"] VALUE
			
			PUSH NEW_OBJ TO RESULT

	RETURN RESULT
*/

function ungroupStudents(classrooms) {
	let result = [];

	for (let classroom of classrooms) {
		for (let student of classroom["data"]) {
			let studentKeys = Object.keys(student);
			let studentCopy = {};
			
			studentKeys.forEach(studentKey => {
				studentCopy[studentKey] = student[studentKey];
			});

			studentCopy["teacher"] = classroom["teacher"];
			result.push(studentCopy);
		}
	}

	return result;
}

console.log(ungroupStudents(
	[
		{
			teacher: "Ms. Car",
			data: [
				{
				 name: "James",
				 emergenceNumber: "617-771-1082",
				}, 
				{
				 name: "Alice",
				 alergies: ["nuts", "carrots"],
				}
			],
		}, 
		{
			teacher: "Mr. Lamb",
			data: [
				{
					name: "Aaron",
					age: 3
				},
			]
		}
	]
));

console.log(ungroupStudents(
	[
		{
			teacher: "Ms. Car",
			data: [],
		}, 
		{
			teacher: "Mr. Lamb",
			data: [
				{
					name: "Aaron",
					age: 3
				},
			]
		}
	]
));

console.log(ungroupStudents(
	[
		{
			teacher: "Ms. Car",
			data: [],
		}, 
		{
			teacher: "Mr. Lamb",
			data: []
		}
	]
));

console.log(ungroupStudents([]));	