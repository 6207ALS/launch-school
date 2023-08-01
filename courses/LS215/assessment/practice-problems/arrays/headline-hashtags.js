// LS216 Practice Problems
// Connecting Words

function getHashTags(headline) {
	let words = headline.split(" ").map(word => word.replaceAll(/[^a-z]/ig, "").toLowerCase());
	if (words.length < 3) {
		words.sort((a, b) => b.length - a.length);
		return words.map(word => `#${word}`);
	}

	let threeLongestWords = [];

	for (let i = 0; i < 3; i++) {
		let wordLengths = words.map(word => word.length);
		let longestWordIndex = wordLengths.indexOf(Math.max(...wordLengths));
		threeLongestWords.push(words.splice(longestWordIndex, 1)[0]);
	}

	return threeLongestWords.map(word => `#${word}`);
}

p = console.log;

p(getHashTags("How the Avocado Became the Fruit of the Global Trade"))
// ➞ ["#avocado", "#became", "#global"]

p(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"))
// ➞ ["#christmas", "#probably", "#will"]

p(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))
// ➞ ["#surprise", "#parents", "#fruit"]

p(getHashTags("Visualizing Science"))
// ➞ ["#visualizing", "#science"]