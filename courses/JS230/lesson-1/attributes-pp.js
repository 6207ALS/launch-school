// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 1 | Practice Problems - Traversing and Accessing Attributes

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let body = document.lastChild.childNodes[2];
let heading = body.childNodes[1];

// Q1
heading.style.color = 'red';
heading.style.fontSize = '48px';

// Q2
let count = 0;

walk(body, function(childNode) {
	if (childNode instanceof HTMLParagraphElement) count++;
})

console.log(`count: ${count}`);


// Q3
let firstWords = [];

walk(body, function(childNode) {
	if (childNode.nodeName === "P") {
		let text = childNode.firstChild.data.trim();
		let firstWord = text.split(" ")[0];
		firstWords.push(firstWord);
	}
})

console.log(firstWords);


// Q4
let first = true;

walk(body, function(childNode) {
	if (childNode.nodeName === "P") {
		if (first) {
			first = false;
		} else {
			childNode.classList.add("stanza");
		}
		console.log(childNode.classList);
	}
})


body = document.childNodes[2].lastChild;

// Q5
let imageCount = 0;
let pngCount = 0;

walk(body, function(childNode) {
	if (childNode instanceof HTMLImageElement) {
			imageCount++;
			let source = childNode.src;
			let extensions = source.split(".");
			let extension = extensions[extensions.length - 1];
			if (extension.toLowerCase() === "png") pngCount++;
	}
});

console.log(imageCount);
console.log(pngCount);


// Q6
walk(body, function(childNode) {
	if (childNode instanceof HTMLAnchorElement) {
			childNode.style.color = 'red';
	}
});