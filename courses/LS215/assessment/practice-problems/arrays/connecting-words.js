// LS216 Practice Problems
// Connecting Words


function join(words) {
	let minOverlap = Math.max(...words.map(word => word.length));
	let result = words[0];

	for (let i = 1; i < words.length; i++) {
		let currentWord = words[i];
		let previousWord = result;

		for (let j = 0; j <= previousWord.length; j++) {
			let endingLetters = previousWord.slice(j);
			let startingLetters = currentWord.slice(0, endingLetters.length);

			if (endingLetters === startingLetters) {
				if (endingLetters.length < minOverlap) minOverlap = endingLetters.length;
				result = previousWord + currentWord.slice(endingLetters.length);
				break;
			}
		}
	}

	return [result, minOverlap];
}

p = console.log;

p(join(["oven", "envier", "erase", "serious"])) 
// ➞ ["ovenvieraserious", 2]


p(join(["move", "over", "very"])) 
// ➞ ["movery", 3]

p(join(["to", "ops", "psy", "syllable"])) 
// ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

p(join(["aaa", "bbb", "ccc", "ddd"])) 
// ➞ ["aaabbbcccddd", 0]