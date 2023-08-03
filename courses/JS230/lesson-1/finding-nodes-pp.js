// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 1 | Practice Problems - Finding DOM Nodes

function walk(node, callback) {
	callback(node);

	for (let i = 0; i < node.childNodes.length; i++) {
		walk(node.childNodes[i], callback);
	}
}


// Problems Group 1

// Q1

function htmlParagraphs() {
	let html = document.lastChild;
	let body = html.lastChild;
	let paragraphs = [];

	walk(body, function(node) {
		if (node instanceof HTMLParagraphElement) paragraphs.push(node);
	});

	return paragraphs;
}


// Q2
function addClassToParagraphs(className) {
	let html = document.lastChild;
	let body = html.lastChild;

	walk(body, function(node) {
		if (node instanceof HTMLParagraphElement) {
			node.classList.add("article-text");
		}
	})
}


// Q3
function getElementsByTagName(tagName) {
	let elements = [];

	walk(body, function(node) {
		if (node.tagName.toLowerCase() === tagName) elements.push(node);
	})

	return elements;
}

let paragraphs = getElementsByTagName("p");
paragraphs.forEach(paragraph => paragraph.classList.add('article-text'));


// Problems Group 2

// Q1
paragraphs = document.getElementsByTagName("p");
let paragraphsArray = Array.prototype.slice.call(paragraphs);
paragraphsArray.forEach(paragraph => paragraph.classList.add("article-text"));


// Q2
let intros = document.getElementByClassName("intro");

for (let i = 0; i < intros.length; i++) {
	let paragraphs = div.getElementsByTagName("p");
	let paragraphsArray = Array.prototype.slice.call(paragraphs);

	paragraphsArray.forEach(paragraph => paragraph.classList.add("article-text"));
}