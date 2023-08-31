// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Nodes to Array

/*
PROBLEM:
Implement a function that converts the DOM, starting from the body, to nested 
arrays. 

Input: None
Output: Array

RULES:
	- Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]]
		- Children are elements as well and as such follow the same format.
	- When an element has no children, it's represented as ["PARENT_TAG_NAME", []].

REQUIREMENTS:
	- 

TEST CASE:

["BODY", CHILDREN(BODY'S CHILDREN)]

["BODY", ["HEADER", []],  ["MAIN", []], ["FOOTER", []]];

*/

function children(node) {
	let nodesChildren = node.children;
	let childrenArray = Array.prototype.slice.call(nodesChildren).filter(node => node.tagName !== "SCRIPT");
	return childrenArray.map(child => [child.tagName, children(child)]);
}

function nodesToArr() {
	let body = document.body;
	return [body.tagName, children(body)];
}

console.log(nodesToArr());
