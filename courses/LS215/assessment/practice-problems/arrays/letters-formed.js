// LS216 Practice Problems
// Letters Formed from the Longest Word

/*
*/

function canForm(words) {
	let longestWord = words.reduce((longestWord, word) => {
		return word.length > longestWord.length ? word : longestWord;
	}, words[0]);

	return words.every(word => word.split("").every(char => longestWord.includes(char)));
}

p = console.log;

p(canForm(["mast", "manifest", "met", "fan"])) // ➞ true

p(canForm(["may", "master", "same", "reams"])) // ➞ false

p(canForm(["may", "same", "reams", "mastery"])) // ➞ true