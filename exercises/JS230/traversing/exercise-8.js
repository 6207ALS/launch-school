// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Array to Nodes

/*
PROBLEM:
Implement a function that converts a nested array of nodeNames 
(see previous exercise "Nodes to Array" for examples) to nodes. 

Input: Array
Output: Object

REQUIREMENTS:
	- RECURSION
	- For a given node and its children nodes
		- Create a node with its tagName being the first element of the argument
		- Its children nodes should be each subarray of the second element converted
			into a node (recursion)


*/

function arrayToNodes(array) {
	let node = document.createElement(array[0]);
	for (let i = 0; i < array[1].length; i++) {
		node.append(arrayToNodes(array[1][i]));
	}
	return node;
}
const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

console.log(arrayToNodes(nodes));