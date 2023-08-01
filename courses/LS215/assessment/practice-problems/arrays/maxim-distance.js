// LS216 Practice Problems
// Maxim Distance to the Nearest Occupied Slot

/*
https://edabit.com/challenge/n97PkSByLXZrApJXn

PROBLEM:
Define a function that takes a string representing a parking area, and return
the maximum distance of an occupied slot from a vacant slot.

Input: String
Output: Number

RULES:
	- String should consist of "0" and "1" characters.
		- "1" - the slot is occupied,
		- "0" - the slot is vacant.
	- Vacant slot that has maximum distance can be at the ends of the parking area.
	- Vacant slot that has maximum distance can also be between two "1"s.
	- Parking area can have just 1 (or many) occupied slots.

	- Assume the argument will always be a single string.
		- String will only consist of characters "0" and "1"s
		- Minimum length of string will be 2 characters
		- String will always have at least one "0" character.
		- String will always have at least one "1" character.
	- If vacant slot is in between two "1" characters, its distance from an
		occupied slot is the smaller distance.


TEST CASES:
maxDistance("01") ➞ 1
// Only the first slot is vacant. Take it. The distance is 1.

maxDistance("100") ➞ 2
// Take the last slot on the right. The distance is 2.

"1" -> iterate backwards, keeping track of how many slots we've iterated
			-> keep iterating until 
"0"

maxDistance("100000101") ➞ 3
// Take the slot at index 3. The distance is 3.
"100000101"

"10" -> "01" -> index 1 + 1 = 2 slots over (PRECENDENCE)
"000101" -> index 3 + 1 = 4 slots over

"100" -> "001" -> index 2 + 1 = 3 slots over
"00101" -> index 2 + 1 = 3 slots over

maxDistance("000010000001001") ➞ 4
// Take the slot at index 0. The distance is 4.
// The other possible slots at indices 7, 8 have distance 3.

"" -> "" -> -1 -> ignore this portion
"000010000001001" -> index 4 (PRECEDENCE)

REQUIREMENTS:
	- Initialize some tracker to keep record of the maximum distance
	- Iterate through each character of String argument.
		- If character is "1", continue to next character.
		- If character is "0", determine nearest "1" character from its left and right
			- left: - slice string from beginning to index of current character
							- reverse the order of characters
							- determine the indexOf first occurring 1 in reversed string.
			- right: - slice string from current index to end of string
							 - determine the indexOf first occurring 1 in sliced string.
			- The current character's "distance" is the smaller value of the two.
			- If distance is greater than maximum-distance, reassign maximum-distance to distance.

DATA STRUCTURE:
	- ARRAY -> reverse, indexOf, slice


ALGORITHM:
	LET MAXIMUM_DISTANCE = 0

	FOR EACH CHARACTER OF STRING_ARG (I)
		IF CHARACTER IS "1"
			CONTINUE
		ELSE IF CHARACTER IS "0"
			LET LEFT_PORTION = SLICE STRING_ARG FROM INDEX 0 TO I + 1
			LET RIGHT_PORTION = SLICE STRING_ARG FROM INDEX I TO END

			LEFT_PORTION = LEFT_PORTION REVERSED
			LEFT_DISTANCE = INDEX OF FIRST OCCURRING 1 IN LEFT_PORTION
			RIGHT_DISTANCE = INDEX OF FIRST OCCURRING 1 IN RIGHT_PORTION

			IF LEFT_DISTANCE IS -1 AND RIGHT_DISTANCE IS > -1 
				RESULT_DISTANCE = RIGHT_DISTANCE
			ELSE IF RIGHT_DISTANCE IS -1 AND LEFT_DISTANCE IS > -1
				RESULT_DISTANCE = LEFT_DISTANCE
			ELSE 
				RESULT_DISTANCE = SMALLER VALUE BETWEEN (LEFT_DISTANCE, RIGHT_DISTANCE)

			IF RESULT_DISTANCE > MAXIMUM_DISTANCE
				MAXIMUM_DISTANCE = RESULT_DISTANCE

	RETURN MAXIMUM_DISTANCE
*/

function maxDistance(str) {
	let maxDistance = 0;

	for (let i = 0; i < str.length; i++) {
		let character = str[i];
		if (character === "1") {
			continue;
		} else if (character === "0") {
			let leftPortion = str.slice(0, i + 1).split("").reverse().join("");
			let rightPortion = str.slice(i);

			let leftDistance = leftPortion.indexOf("1");
			let rightDistance = rightPortion.indexOf("1");
			let resultDistance;

			if (leftDistance === -1 && rightDistance > -1) {
				resultDistance = rightDistance;
			} else if (leftDistance > -1 && rightDistance === -1) {
				resultDistance = leftDistance;
			} else {
				resultDistance = Math.min(leftDistance, rightDistance);
			}
			
			if (resultDistance > maxDistance) maxDistance = resultDistance;
		}
	}

	return maxDistance;
}

p = console.log;

p(maxDistance("01")) // ➞ 1
// Only the first slot is vacant. Take it. The distance is 1.

p(maxDistance("100")) // ➞ 2
// Take the last slot on the right. The distance is 2.

p(maxDistance("100000101")) // ➞ 3
// Take the slot at index 3. The distance is 3.

p(maxDistance("000010000001001")) // ➞ 4
// Take the slot at index 0. The distance is 4.
// The other possible slots at indices 7, 8 have distance 3.