// LS216 Practice Problems
// Make Anagrams

/*


*/

function makeAnagram(str1, str2) {
	let longerWord = str1.length > str2.length ? str1 : str2;

	for (let char of longerWord) {
		if (str1.includes(char) && str2.includes(char)) {
			str1 = str1.replace(char, "");
			str2 = str2.replace(char, "");
		}
	}
	
	return (str1 + str2).length;	
}

p = console.log;

p(makeAnagram("cde", "abc")) // ➞ 4
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// It takes 4 deletions to make both strings anagrams.

p(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")) // ➞ 30

p(makeAnagram("showman", "woman")) // ➞ 2