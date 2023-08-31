// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Child Nodes

/*
<div id="1">
  <h1 id="2">Hello, <em id="3">World</em></h1>
  <p id="4">
    Welcome to wonderland. This is an
    <span id="5">awesome</span> place.
  </p>
  <a href="#" id="6"><strong id="7">Enter</strong></a>
  <div id="8"><p id="9"><a href="#" id="10">Go back</a></p></div>
</div>
*/

// id: 1
// direct: #T, h1, #T, p, #T, a, #T, div, #T -> 9
// indirect: #T, em, #T, #T, span, #T, #T, strong, #T, p, a, #T -> 12

// id: 2
// direct: #T, em -> 2
// indirect: #T -> 1

// id: 3
// direct: #T -> 1
// indirect: 0

// id: 4
// direct: #T, span, #T -> 3
// indirect: #T -> 1

// id: 5
// direct: #T -> 1
// indirect: 0

// id: 6
// direct: strong -> 1
// indirect: #T -> 1

// id: 7
// direct: #T -> 1
// indirect: 0

// id: 8
// direct: p -> 1
// indirect: a, #T -> 2

// id: 9
// direct: a -> 1
// indirect: #T -> 1

// id: 10
// direct: #T -> 1
// indirect: 0

function walk(node, callback) {
	callback(node);
	for (let i = 0; i < node.childNodes.length; i++) {
		walk(node.childNodes[i], callback);
	}
}

function numberNodes(node) {
	let count = 0;
	walk(node, _ => count++);
	return count;
}

function numChildNodes(nodeId) {
	let node = document.getElementById(`${nodeId}`);
	let directChildNodes = node.childNodes;
	let numDirectChildNodes = node.childNodes.length;
	let numIndirectChildNodes = 0;

	for (let i = 0; i < directChildNodes.length; i++) {
		for (let j = 0; j < directChildNodes[i].childNodes.length; j++) {
			let indirectChildNode = directChildNodes[i].childNodes[j];
			numIndirectChildNodes += numberNodes(indirectChildNode);
		}
	}

	return [ numDirectChildNodes, numIndirectChildNodes ];
}

console.log(numChildNodes(10));
