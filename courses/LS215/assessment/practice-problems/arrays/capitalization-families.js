// LS216 Practice Problems
// Capitalization Families

/*
https://edabit.com/challenge/socoDGxk3JGKezRYm

PROBLEM:
Write a function that groups words by the number of capital letters and returns 
an array of object entries whose keys are the number of capital letters and 
the values are the groups.

Input: Array
Output: Array

RULES:
	- The object entries have to be sorted by the number of capital letters.
	- The groups will be arrays of all words sharing the same number of capital 
		letters.
		- The groups have to be sorted alphabetically (ignoring case).

	- Assume argument will always be a single Array.
		- Array will only contain Strings as elements.
		- Array will always contain at least 1 element.
		- Array argument can be mutated, if needed.
		- Array argument will never be sparse.
		- Array will never contain duplicate elements.
			- Strings will be unique (case-insensitive)

		- String elements will only contain alphabetical characters.
		- Letters can be uppercase and lowercase.
		- Some strings can be all uppercase / all lowercase.
		- Strings will never be empty -> will always have at least 1 character. 

	- Some arguments will have strings where all of them have the same number of
		capital letters.
	- Some strings could be the only string with a certain number of capital letters.
	- Output entries should preserve letter casing for each string.

TEST CASES:
grouping(["HaPPy", "mOOdy", "yummy", "mayBE"]) 
// ➞ [
//   [0, ["yummy"]],
//   [2, ["mayBE", "mOOdy"]],
//   [3, ["HaPPy"]]
// ]

{
	"0": ["yummy"]
	"3": ["HaPPy"]
	"2": ["mOOdy", "mayBE"]
}

"HaPPy" -> 3
"mOOdy" -> 2
"yummy" -> 0
"mayBE" -> 2

[["0", ["yummy"]], ["3", "HaPPy"], ["2", ["mOOdy", "mayBe"]]] -> Return object entries
[[0, ["yummy"]], [3, "HaPPy"], [2, ["mOOdy", "mayBe"]]]	-> Convert first element of every entry into Number
[[0, ["yummy"]], [2, ["mOOdy", "mayBe"],  [3, "HaPPy"]]] -> Sort array with respect to first element of every entry (ascending order)
[[0, ["yummy"]], [2, ["mayBe", "mOOdy"],  [3, "HaPPy"]]]	-> Sort each entry's second element by alphabetical order (case-insensitive)

grouping(["eeny", "meeny", "miny", "moe"]) 
// ➞ [
//   [0, ["eeny", "meeny", "miny", "moe"]]
// ]

grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor", "JOR"]) 
// ➞ [
//   [0, ["lor"]],
//   [1, ["sOr"]],
//   [2, ["bOR", "JOR", "MoR", "tOR"]],
//   [3, ["FORe"]]
// ]

grouping(["FORe"])
// ➞ [
//   [0, ["lor"]],
// ]

grouping(["F", "DiLor"]) 
// ➞ [
//   [1, ["F"]],
//   [2, ["DiLor"]],
// ]

REQUIREMENTS:
	- Initialize empty object to record number of capital letters and their 
		associated words.

	- Iterate through each word of array argument.
		- For each word, count the number of capital letters.
		- If count doesn't exist as key in object, create the key with a value of
			an empty array.
		- Push the word to the empty array.

	- Retrieve object's entries.
	- Convert every first element of entry into a Number
	- Sort entries with respect to each entry's first element (in ascending order)
	- Then, iterate through each entry of entries and sort the second element
		by alphabetical order (case-insensitve)

DATA STRUCTURE:
	- Array
	- Object

ALGORITHM:
	LET GROUPS = {}

	FOR EACH WORD OF ARRAY_ARG
		LET COUNT = LENGTH OF (REPLACE ALL LOWERCASE LETTER OF WORD WITH "") 
		IF COUNT IS NOT A PROPERTY IN GROUPS
			GROUPS[COUNT] = [];

		PUSH WORD TO GROUPS[COUNT] 

	LET ENTRIES = RETRIEVE ENTRIES OF GROUPS
	ENTRIES = MAP ENTRIES WHERE EVERY FIRST ELEMENT OF AN ENTRY IS CONVERTED INTO 
						A NUMBER
	SORT ENTRIES WITH RESPECT TO EVERY ENTRY'S FIRST ELEMENT (ASCENDING ORDER)
	
	FOR EVERY ENTRY OF ENTRY
		LET GROUP = ENTRY[1]
		SORT GROUP BY ALPHABETICAL ORDER (CASE-INSENSITIVE)

	RETURN ENTRIES
*/

function grouping(words) {
	let groups = {};

	for (let word of words) {
		let count = word.replaceAll(/[^A-Z]/g, "").length;
		if (!(groups.hasOwnProperty(count))) groups[count] = [];
		groups[count].push(word);
	}

	let entries = Object.entries(groups);
	entries.forEach(entry => entry[0] = Number(entry[0]));
	entries.sort((entryA, entryB) => entryA[0] - entryB[0]);
	entries.forEach(entry => {
		entry[1].sort((wordA, wordB) => {
			if (wordA.toLowerCase() < wordB.toLowerCase()) {
				return -1;
			} else if (wordA.toLowerCase() > wordB.toLowerCase()) {
				return 1;
			} else {
				return 0;
			}
		});
	});

	return entries;

}

p = console.log;

p(grouping(["HaPPy", "mOOdy", "yummy", "mayBE"])) 
// ➞ [
//   [0, ["yummy"]],
//   [2, ["mayBE", "mOOdy"]],
//   [3, ["HaPPy"]]
// ]

p(grouping(["eeny", "meeny", "miny", "moe"])) 
// ➞ [
//   [0, ["eeny", "meeny", "miny", "moe"]]
// ]

p(grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor", "JOR"])) 
// ➞ [
//   [0, ["lor"]],
//   [1, ["sOr"]],
//   [2, ["bOR", "JOR", "MoR", "tOR"]],
//   [3, ["FORe", "JOR"]]
// ]

p(grouping(["FORe"]))
// ➞ [
//   [3, ["FORe"]],
// ]

p(grouping(["F", "DiLor"])) 
// ➞ [
//   [1, ["F"]],
//   [2, ["DiLor"]],
// ]