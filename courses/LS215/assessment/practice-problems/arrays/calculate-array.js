// LS216 Practice Problems
// Calculate Depth of Array

/*
https://edabit.com/challenge/JJtafXGmNegpQMp6p

PROBLEM:
Given an array, write a function to calculate it's depth. 

Input: Array
Output: Number

RULES:
	- Depth: The highest number of nested arrays	
	- Assume that a normal array has a depth of 1.
	- Assume the argument will always be a single array.
	- Assume the elements of any array will either be an Integer or an Array.
	- The array argument can have multiple "pockets" of nested arrays, each with
		differing depths.
	- The array argument can be mutated, if needed.
	- If the array argument is empty, return 1.
	- The array argument will never be sparse.


TEST CASES:

depth([1, 2, 3, 4]) // ➞ 1
[
	1, 2, 3, 4
]



depth([1, [2, 3, 4]]) // ➞ 2
[
	1,
	[
		2, 3, 4
	]
]

[[2, 3, 4]]
[[]]


depth([1, [2, [3, 4]]]) // ➞ 3

[[[]]]

[
	1,
	[
		2,
		[
			3,
			4
		]
	]
]

depth([1, [2, [3, [4]]]]) // ➞ 4
[ [ [ [] ] ] ] 

[
	1,
	[
		2,
		[
			3,
			[
				4
			]
		]
	]
]

depth([1, [2, [3, [4]]], [2]]) // ➞ 4

[ [ [ [] ] ], [] ]

[
	1,
	[
		2,
		[
			3,
			[
				4
			]
		]
	],
	[
		2
	]
]

REQUIREMENTS:
	- If every element in array is not array, return depth of 1
	- If not, return 1 + depth of (array with the largest depth out of all arrays)

DATA STRUCTURE:
	Array

ALGORITHM:
	IF EVERY ELEMENT IN ARRAY IS NOT ARRAY
		RETURN 1

	LET ARRAYS = FILTER ARRAYS IN ARRAY ARGUMENT	
	ARRAYS = MAP EACH ARRAY IN ARRAYS WITH THEIR DEPTH

	RETURN 1 + MAX_VALUE(ARRAYS)

depth([1, [2, [3, [4]]], [2]]) // ➞ 4

[
	[2, [3, [4]]], // 3
	[2]						// 1
]

// 2
[
	[3, [4]]
]

// 1
[
	[4]
]


*/

function depth(arr) {
	if (arr.every(element => !Array.isArray(element))) return 1;

	let arrays = arr.filter(element => Array.isArray(element));
	let depths = arrays.map(arr => depth(arr));

	return 1 + Math.max(...depths);
}

p = console.log;

p(depth([1, 2, 3, 4])) // ➞ 1
p(depth([1, [2, 3, 4]])) // ➞ 2
p(depth([1, [2, [3, 4]]])) // ➞ 3
p(depth([1, [2, [3, [4]]]])) // ➞ 4
p(depth([1, [2, [3, [4]]], [2]])) // ➞ 4