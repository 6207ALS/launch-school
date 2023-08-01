// LS216 Practice Problems
// Distance To Nearest Vowel

/*
https://edabit.com/challenge/b9FBAhxaijR9fzxgo

PROBLEM:
Write a function that takes in a string and for each character, returns the 
distance to the nearest vowel in the string. 

Input: String
Output: Array

Rules:
	- All input strings will contain at least one vowel.
		- String will never be empty.
	- Strings will be lowercased.
	- Vowels are: a, e, i, o, u.
	- If the character is a vowel itself, return 0.
	- Assume the argument will always be a single string.
	- String could contain duplicate values.
	- String could contain only unique characters.
	- String could contain only vowels.
	- String will only contain letter characters (no whitespace, no non-alphabetical chars)

TEST CASES:

distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcda") ➞ [0, 1, 2, 1, 0, 1, 2, 3, 0]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]

distanceToNearestVowel("a") ➞ [0]


REQUIREMENTS:
	- For each character of string.
			- Determine leftVowelIndex
			- Iterate from index 0 -> (index - 1)
			- Find the highest index with a vowel as the element.
		- Determine rightVowelIndex
			- Iterate from (index + 1) -> end of string
			- Find the lowest index with a vowel as the element.
		- Find the absolute difference between the leftVowelIndex and current index
		- Find the absolute difference between the rightVowelIndex and current index
		- Return the smaller difference

DATA STRUCTURE:
	Array -> Abstraction Methods (map)

ALGORITHM:

MAIN(STR)
	SPLIT STR INTO ARRAY
	MAP SPLIT STR
		IF ELEMENT IS VOWEL
			RETURN 0
		ELSE
			RETURN NEAREST_VOWEL(STR, INDEX)
	RETURN MAPPED ARRAY

NEAREST_VOWEL_DISTANCE(STR, INDEX)
	LET LEFT_VOWEL = NEAREST_LEFT_VOWEL(STR, INDEX)
	LET RIGHT_VOWEL = NEAREST_RIGHT_VOWEL(STR, INDEX)

	IF LEFT_VOWEL IS UNDEFINED AND RIGHT_VOWEL IS NOT UNDEFINED
		RETURN MATH.ABS(INDEX - RIGHT_VOWEL)
	ELSE IF LEFT_VOWEL IS NOT UNDEFINED AND RIGHT_VOWEL IS UNDEFINED
		RETURN MATH.ABS(INDEX - LEFT_VOWEL)
	ELSE
		RETURN SMALLER VALUE BETWEEN TWO DIFFERENCE

NEAREST_LEFT_VOWEL(STR, INDEX) 
	LET LEFT_PORTION = SLICE STR FROM INDEX 0 => (INDEX - 1)
	LET VOWEL_INDEX;

	FOR EACH CHAR OF LEFT_PORTION (LEFT TO RIGHT)
		IF CHAR IS VOWEL
			VOWEL_INDEX = CURRENT INDEX

	RETURN VOWEL_INDEX

NEAREST_RIGHT_VOWEL(STR, INDEX)
	LET RIGHT_PORTION = SLICE STR FROM (INDEX + 1) => END OF STR
	LET VOWEL_INDEX;

	FOR EACH CHAR OF RIGHT_PORTION (RIGHT TO LEFT)
		IF CHAR IS VOWEL
			VOWEL_INDEX = CURRENT INDEX
*/

function distanceToNearestVowel(str) {
	return str.split("").map((char, index) => {
		return (/[aeiou]/.test(char) ? 0 : nearestVowelDistance(str, index));
	});
}

function nearestVowelDistance(str, index) {
	let leftVowel = nearestLeftVowel(str, index);
	let rightVowel = nearestRightVowel(str, index);

	if (leftVowel === undefined && rightVowel !== undefined) {
		return Math.abs(index - rightVowel);
	} else if (leftVowel !== undefined && rightVowel === undefined) {
		return Math.abs(index - leftVowel);
	} else {
		return Math.min(Math.abs(index - leftVowel), Math.abs(index - rightVowel));
	}
}

function nearestLeftVowel(str, index) {
	let leftVowel;

	for (let i = 0; i < str.length; i++) {
		if (i >= index) continue;
		if (/[aeiou]/.test(str[i])) leftVowel = i;
	}

	return leftVowel;
}

function nearestRightVowel(str, index) {
	let rightVowel;

	for (let i = str.length - 1; i >= 0; i--) {
		if (i <= index) continue;
		if (/[aeiou]/.test(str[i])) rightVowel = i;
	}

	return rightVowel;
}

p = console.log;

p(distanceToNearestVowel("aaaaa")) // ➞ [0, 0, 0, 0, 0]

p(distanceToNearestVowel("babbb")) // ➞ [1, 0, 1, 2, 3]

p(distanceToNearestVowel("abcdabcda")) // ➞ [0, 1, 2, 1, 0, 1, 2, 1, 0]

p(distanceToNearestVowel("shopper")) // ➞ [2, 1, 0, 1, 1, 0, 1]

p(distanceToNearestVowel("a")) // ➞ [0]