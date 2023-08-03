// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 1 | Practice Problems - Finding Nodes and Traversing Elements


// Q1
let h2s = document.getElementsByTagName("h2");
let h2sArray = Array.prototype.slice.call(h2s);
let h2sWordCount = h2sArray.map(h2 => h2.textContent.split(" ").length);


// Q2
document.getElementById("toc");
document.getElementsByClass("toc");
document.querySelector(".toc");


// Q3
let anchorLinks = document.querySelectorAll(".toc a");

for (let i = 0; i < anchorLinks.length; i++) {
	if (i % 2 === 1) {
			anchorLinks[i].style.color = "green";
	}
}


// Q4
let thumbnailElements = document.querySelectorAll(".thumbcaption");
let thumbnailElementsArray = Array.prototype.slice.call(thumbnailElements);
let thumbnailTexts = thumbnailElementsArray.map(thumbnail => thumbnail.textContent);


// Q5
let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];

let classification = {};

let tds = document.querySelectorAll(".infobox td");

for (let i = 0; i < tds.length; i++) {
	let td = tds[i];
	let tdContent = td.textContent;

	for (let key of keys) {
		if (tdContent.indexOf(key) !== -1) {
			classification[key] = td.nextElementSibling.textContent;
		}
	}
}