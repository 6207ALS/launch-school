// LS216 Practice Problems
// Substring Consonant-Vowel Groups

/*

*/

function getVowelSubstrings(str) {
	let substrings = allSubstrings(str);
	substrings.filter((substr, index) => substrings.indexOf(substr) === index);
	substrings = substrings.filter(substr => /[aeiou]/i.test(substr[0]) && /[aeiou]/i.test(substr[substr.length - 1]));
	substrings.sort();

	return substrings;
}

function getConsonantSubstrings(str) {
	let substrings = allSubstrings(str);
	substrings.filter((substr, index) => substrings.indexOf(substr) === index);
	substrings = substrings.filter(substr => /[^aeiou]/i.test(substr[0]) && /[^aeiou]/i.test(substr[substr.length - 1]));
	substrings.sort();

	return substrings;
}

function allSubstrings(str) {
	let substrings = [];

	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j <= str.length; j++) {
			substrings.push(str.slice(i, j));
		}
	}

	return substrings;
}

p = console.log;

p(getVowelSubstrings("apple"))
// ➞ ["a", "apple", "e"]

p(getVowelSubstrings("hmm"))
// ➞ []

p(getConsonantSubstrings("aviation"))
// ➞ ["n", "t", "tion", "v", "viat", "viation"]

p(getConsonantSubstrings("motor"))
// ➞ ["m", "mot", "motor", "r", "t", "tor"]