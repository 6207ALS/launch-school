// LS216 Practice Problems
// Majority Vote

/*
https://edabit.com/challenge/aewSLr2r2LMSDhPxf

PROBLEM:
Create a function that returns the majority vote in an array.

Input: Array
Output: String

Rules:
	- A majority vote is an element that occurs > N/2 times in an array 
		(where N is the length of the array).
		- Only one element can have a majority vote.

	- The frequency of the majority element must be strictly greater than N/2.
		- Vote cannot be equal to N/2
	- If there is no majority element, return null.
	- Assume the argument will always be a single Array
		- Assume the array will only contain single-character strings as elements
			- Characters will be uppercased letters
		- Array will never be sparse.
		- Array argument can be mutated if needed.
		- If the array is empty, return null.
		- If array contains only one element, return that element.

TEST CASES:

// General example
majorityVote(["A", "A", "B"]) 
// ➞ "A"

// No majority vote existing
majorityVote(["A", "B", "B", "A", "C", "C"]) 
// ➞ null

// Longer array
majorityVote(["A", "A", "A", "B", "C", "A"]) 
//➞ "A"

// Empty array
majorityVote([]) 
// ➞ null

// One-element array
majorityVote(["A"]) 
// ➞ "A"

REQUIREMENT:
	- If array length is empty, return null.
	- Determine all unique characters in array argument
	- For each unique character, determine how many times it appears in array
		- If count is greater than N / 2, return that character
	

DATA STRUCTURE:
	ARRAY

ALGORITHM:
	IF ARRAY LENGTH IS 0
		RETURN NULL 
	
	LET UNIQUE CHARACTERS = FILTER ARRAY WITH ONLY UNIQUE CHARACTERS
	
	FOR EACH UNIQUE CHARACTER
		LET COUNT = FILTER ARRAY WITH ONLY CURRENT CHARACTER
		IF COUNT > (LENGTH OF ARRAY / 2)
			RETURN CHARACTER

	RETURN NULL
*/

function majorityVote(votes) {
	if (votes.length === 0) return null;
	let uniqueVotes = votes.filter((vote, index) => votes.indexOf(vote) === index);

	for (let uniqueVote of uniqueVotes) {
		let count = votes.filter(vote => vote === uniqueVote).length;
		if (count > (votes.length / 2)) return uniqueVote;
	}

	return null;
}

p = console.log;

// General example
p(majorityVote(["A", "A", "B"])) 
// ➞ "A"

// No majority vote existing
p(majorityVote(["A", "B", "B", "A", "C", "C"])) 
// ➞ null

// Longer array
p(majorityVote(["A", "A", "A", "B", "C", "A"])) 
//➞ "A"

// Empty array
p(majorityVote([])) 
// ➞ null

// One-element array
p(majorityVote(["A"])) 
// ➞ "A"