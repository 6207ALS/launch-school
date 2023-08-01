// LS216 Practice Problems
// Word Buckets

/*
https://edabit.com/challenge/Q7foiyejfJG6pqqws

PROBLEM:
Write a function that divides a phrase into word buckets, with each bucket 
containing n or fewer characters.

Input: String, Number (n)
Output: Array

RULES:
	- Each bucket contains n or fewer characters.
	- Only include full words inside each bucket.
	- Spaces count as one character.
	- Trim beginning and end spaces for each word bucket.
	- After bucketizing a portion of the phrase, the next bucket should begin at
		the start of a new word.

	- Assume the arguments will always be a String and a Number (in that order).
		- Assume the Number argument will always be an Integer.
			- Integer value will be in range of [1, length-of-string]
		- String will never be empty.
		- String will always be in the format of a "phrase".
			- "phrase": a series of one or more words, each separated by a single 
									whitespace.
			- "word": a series of one or more alphabetical characters, bounded by
								whitespace.
		- String argument will never have leading/trailing whitespace.
		- String argument will only contain alphabetical and whitespace characters.
	- Function should preserve letter-casing.
	- Function should preserve whitespace in original String.

TEST CASES:

bucketize("she sells sea shells by the sea", 10)
// ➞ ["she sells", "sea shells", "by the sea"]

[
	"she sells"
	"she shells"
	"by the sea"
]

[she, sells, sea, shells, by, the, sea]

bucketize("the mouse jumped over the cheese", 7)
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
[
	"the"
	"mouse"
]

["the", "mouse", "jumped", "over", "the", "cheese"]
["mouse"] -> 



bucketize("fairy dust coated the air", 20)
// ➞ ["fairy dust coated", "the air"]

bucketize("a b c d e", 2)
// ➞ ["a", "b", "c", "d", "e"]

bucketize("a b c d e", 9)
// ➞ ["a b c d e"]

bucketize("a b c d e", 1)
// ➞ ["a", "b", "c", "d", "e"]

bucketize("apple bee c daniel e", 1)
// ➞ ["c", "e"]

bucketize("a", 1)
// ➞ ["a"]


REQUIREMENTS:
	- Split string argument by words (" " delimiter)
	- Initialize empty array to hold all buckets
	- Initialize empty array to hold all words for a single bucket
	- Iterate through every word of words
		- If adding the word to bucket and converting bucket into a sentence (" " as delimiter)
			results in a string longer than N, do not add word to bucket
		- Else, push word to bucket
		- If converting bucket into a sentence (" " as delimiter) results in a string 
			EQUAL to N, convert bucket into a sentence (" " as delimiter) and push resulting
			string into buckets array.
			- Then, reset bucket to empty array.

DATA STRUCTURE:
	- ARRAY

ALGORITHM:
	LET WORDS = SPLIT STRING INTO WORDS USING " " AS DELIMITER
	LET BUCKETS = []
	LET BUCKET = []

	FOR EACH WORD OF WORDS
		IF LENGTH OF (BUCKET CONCATENATED WITH [WORD] CONVERTED INTO SENTENCE) > N
			CONTINUE TO NEXT WORD
		ELSE
			PUSH WORD TO BUCKET

		IF LENGTH OF (BUCKET CONVERTED INTO SENTENCE) === N - 1 ||
			 LENGTH OF (BUCKET CONVERTED INTO SENTENCE) === N
			PUSH (BUCKET CONVERTED INTO SENTENCE) INTO BUCKETS
			BUCKET = []

	RETURN BUCKETS
*/

function bucketize(str, bucketSize) {
	let words = str.split(" ");
	let buckets = [];
	let bucket = [];

	for (let i = 0; i < words.length; ) {
		let word = words[i];
		let nextBucket = bucket.concat([word]).join(" ");
		let currentBucket = bucket.join(" ");

		if (nextBucket.length > bucketSize) {
			if (bucket.length === 0) {
				i++
			} else {
				buckets.push(currentBucket);
				bucket = [];
			}
		} else {
			bucket.push(word);
			i++
		}

		// currentBucket = bucket.join(" ");
		// if (currentBucket.length === bucketSize ||
		// 		currentBucket.length === bucketSize - 1) {
		// 			buckets.push(currentBucket);
		// 			bucket = [];
		// 		}
		// i++;
	}
	buckets.push(bucket.join(" "));
	return buckets;
}

p = console.log;

p(bucketize("she sells sea shells by the sea", 10))
// ➞ ["she sells", "sea shells", "by the sea"]

p(bucketize("the mouse jumped over the cheese", 7))


p(bucketize("fairy dust coated the air", 20))
// ➞ ["fairy dust coated", "the air"]

p(bucketize("a b c d e", 2))
// ➞ ["a", "b", "c", "d", "e"]

p(bucketize("a b c d e", 9))
// ➞ ["a b c d e"]

p(bucketize("a b c d e", 1))
// ➞ ["a", "b", "c", "d", "e"]

p(bucketize("apple bee c daniel e", 1))
// ➞ ["c", "e"]

p(bucketize("a", 1))
// ➞ ["a"]