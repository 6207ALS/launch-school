// LS216 Practice Problems
// Longest Substring with Non-repeating Characters

/**/

function longestNonrepeatingSubstring(str) {
	let longestSubstr = "";

	for (let i = 0; i < str.length - 1; i++) {
		for (let j = i + 1; j <= str.length; j++) {
			let substr = str.slice(i, j);
			if (!isRepeating(substr)) {
				if (substr.length > longestSubstr.length) longestSubstr = substr;
			}
		}
	}

	return longestSubstr;
}

function isRepeating(str) {
	return !str.split("").every((char, index) => str.indexOf(char) === index);
}

p = console.log;

p(longestNonrepeatingSubstring("abcabcbb")) // ➞ "abc"

p(longestNonrepeatingSubstring("aaaaaa")) // ➞ "a"

p(longestNonrepeatingSubstring("abcde")) // ➞ "abcde"

p(longestNonrepeatingSubstring("abcda")) // ➞ "abcd"