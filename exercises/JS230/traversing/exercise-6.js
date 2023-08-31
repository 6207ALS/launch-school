// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Node Swap

/*
PROBLEM:
Write a function that takes two element ids as arguments and swaps the positions
of the elements represented by the ids.

Input: Number, Number
Output: True / undefined

RULES:
	- assume that nodes will have a value for the id attribute
	- two arguments will always be provided.
	- some argument values may not be an existing node id -> return undefined
	- a node cannot be a child node of the other -> return undefined
		- boths nodes should be siblings or at the same level

TEST CASES:

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="2"></div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

// valid swaps (all return true)
> nodeSwap(1, 2);
> nodeSwap(3, 1);
> nodeSwap(7, 9);

// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined

REQUIREMENTS:
	- Identify elements of given ids
		- If either elements don't exist, return undefined
	- Determine how many ancestors (parent nodes) both elements have
		- If number of ancestors are not the same, return false

	- Determine previous sibling for both elements
	- Swap positions of elements using previous siblings as reference

DATA STRUCTURE:
	- OBJECTS (Node / elements)

ALGORITHM:
	LET ELEMENT_1 = FIND ELEMENT IN DOCUMENT WITH ID OF FIRST_ARG
	LET ELEMENT_2 = FIND ELEMENT IN DOCUMENT WITH ID OF SECOND_ARG

	IF ELEMENT_1 OR ELEMENT_2 ARE FALSY
		RETURN UNDEFINED

	LET NUM_ELEMENT_1_ANCESTORS = NUM_ANCESTORS(ELEMENT_1)
	LET NUM_ELEMENT_2_ANCESTORS = NUM_ANCESTORS(ELEMENT_2)

	IF (NUM_ELEMENT_1_ANCESTORS IS NOT EQUAL TO NUM_ELEMENT_2_ANCESTORS) 
		RETURN UNDEFINED

	LET ELEMENT_1_SIBLING = PREVIOUS SIBLING OF ELEMENT_1
	LET ELEMENT_2_SIBLING = PREVIOUS SIBLING OF ELEMENT_2

	PLACE ELEMENT_1 AFTER ELEMENT_2_SIBLING
	PLACE ELEMENT_2 AFTER ELEMENT_1 SIBLING
*/

function nodeSwap(id1, id2) {
	let element1 = document.getElementById(id1);
	let element2 = document.getElementById(id2);

	if (element1 === null || element2 === null) return undefined;

	let numElement1Ancestors = numAncestors(element1);
	let numElement2Ancestors = numAncestors(element2);

	if (numElement1Ancestors !== numElement2Ancestors) return undefined;

	let element1Clone = element1.cloneNode(true);
	let element2Clone = element2.cloneNode(true);
	
	element2.parentNode.replaceChild(element1Clone, element2);
	element1.parentNode.replaceChild(element2Clone, element1);

	return true;
}

function numAncestors(element) {
	let count = 0;

	while (element.parentNode !== document.body) {
		count++;
		element = element.parentNode;
	}

	return count;
}

p = console.log;

// valid swaps (all return true)
p(nodeSwap(1, 2));
p(nodeSwap(3, 1));
p(nodeSwap(7, 9));

// // at least one of the id attributes doesn't exist
p(nodeSwap(1, 20));
// undefined

// // at least one of the nodes is a "child" of the other
p(nodeSwap(1, 4));
// undefined

p(nodeSwap(9, 3));
// undefined
