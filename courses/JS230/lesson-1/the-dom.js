// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 1 | Practice Problems - the DOM

// Q1
let heading = document.getElementById("primary_heading");
heading.classList.add("heading");


// Q2
let uls = document.querySelectorAll("ul");
for (let i = 0; i < uls.length; i++) {
	uls[i].classList.add("bulleted");
}


// Q3
let element = document.getElementById("notice");
let link = document.getElementById("toggle");

link.onclick = function(e) {
	e.preventDefault();
	if (element.getAttribute("class") === 'visible') {
			element.setAttribute("class", "hidden");
	} else if (element.getAttribute("class") === "hidden") {
			element.setAttribute("class", "visible");
	}
};

// Q4
element.onclick = function(e) {
	e.preventDefault();
	element.setAttribute("class", "hidden");
}


// Q5
let math = document.getElementById("multiplication");
math.textContent = "117";


// Q6
let body = document.body;
body.setAttribute("id", "styled");

