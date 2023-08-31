// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Tree Slicing

/*
Implement a function, sliceTree, that is "similar" to the Array.prototype.slice 
method, but this time for a DOM tree. 

Input: Number, Number
Output: Array

RULES:
	- The sliceTree function takes two arguments:
		- The start index which is the parent node's id attribute
		- The end index which is the innermost child node's id attribute.
	- The function returns an array of tagNames.
	- Consider the following when implementing the sliceTree function:
		- It's similar to slice but different in the sense that slice IS NOT 
			inclusive on the right hand side.
		- The end index doesn't have to be the id of the "innermost" child node as 
			some of the examples suggest.
		- Only consider element nodes.
		- Only elements that have body as an ancestor (parent, grandparent, etc.) 
			are sliceable.
		- If the id attribute of the start or end index is not in the DOM, return 
			undefined.
		- If the slice is not feasible — there's no path connecting the element at 
			the starting index to the ending index — return undefined.

REQUIREMENTS:
	- RECURSIVE
	- Initialize empty Array argument.
	- Identify node with "startId"
		- Push tagName of node to empty Array argument
	- If startId is equal to endId, return the node's tagName inside an array 
	- Look at direct children element of node
	- If any of the children elements contain an element with the "endId"
		- Concatenate current array with:
			- Repeat process with "startId" being id of startId but same "endId"
	- Else 
		- Return undefined

DATA STRUCTURE:
	- OBJECTS (ELEMENTS / NODES)
	- ARRAY

ALGORITHM:

SLICE_TREE(START_ID, END_ID)
	LET ELEMENT = FIND ELEMENT WITH ID OF START_ID
	LET RESULT = []
	PUSH ELEMENT'S TAG_NAME TO RESULT

	LET CHILDREN = CHILDREN NODES OF ELEMENT
	FOR EACH CHILD OF CHILDREN
		LET CHILD_ID = CHILD'S ID
		LET ALL_IDS = IDS_OF(CHILD)
		IF ALL_IDS CONTAINS THE END_ID
			RETURN RESULT CONCATENATED WITH SLICE_TREE(CHILD_ID, END_ID)

	RETURN UNDEFINED;
*/

function walk(element, callback) {
	callback(element);
	for (let i = 0; i < element.children.length; i++) {
		walk(element.children[i], callback)
	}
}

function idsOf(element) {
	let ids = [];
	walk(element, node => ids.push(node.id));
	return ids;
}

function sliceTree(startId, endId) {
	let element = document.getElementById(startId);
	let result = [element.tagName];

	if (startId === endId) return result;

	let children = element.children;
	for (let child of children) {
		let childId = child.id;
		let allIds = idsOf(child);
		if (allIds.includes(`${endId}`)) {
			return result.concat(sliceTree(+childId, endId));
		}
	}
	
	return undefined;
}

p = console.log;

p(sliceTree(1, 4));

p(sliceTree(1, 4));
// ["ARTICLE", "HEADER", "SPAN", "A"]

p(sliceTree(1, 76));
// undefined

p(sliceTree(2, 5));
// undefined

p(sliceTree(5, 4));
// undefined

p(sliceTree(1, 23));
// ["ARTICLE", "FOOTER"]

p(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]

p(sliceTree(11, 19));
// ["SECTION", "P", "SPAN", "STRONG", "A"]