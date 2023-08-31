// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Coloring

/*
PROBLEM:
Write a function that colors a specific generation of the DOM tree. 

Input: Number
Output: undefined

RULES:
	- A generation is a set of elements that are on the same level of indentation.
	- You may use the .generation-color class to color the specific generation. 
	- You can assume that only non-negative integers will be provided as arguments.

REQUIREMENTS:
	- Initialize current generation to 1.
	- Initialize parent_node to [document]
	- If current generation is equal to integer argument
		- for every children of every element in parent_elements
		- add the ".generation-color" class to all children
		- end function
	- Else,
		- increment current generation by 1
		- reassign parent_node to array of current parent_node's children elements
*/

function toArray(HTMLCollection) {
	return Array.prototype.slice.call(HTMLCollection);
}

function colorGeneration(targetGeneration) {
	let generation = 1;
	let generationElements = toArray(document.body.children).filter(child => child.tagName !== "SCRIPT");

	while (generation <= targetGeneration) {
		if (generation === targetGeneration) {
			for (let element of generationElements) {
				element.classList.add("generation-color");
			}
			return undefined;
		} else {
			generation++;
			let newGeneration = [];
			for (let element of generationElements) {
				let childrenArray = toArray(element.children);
				childrenArray.forEach(child => newGeneration.push(child));
			}
			generationElements = newGeneration;
		}
	}

	return undefined
}

colorGeneration(8);