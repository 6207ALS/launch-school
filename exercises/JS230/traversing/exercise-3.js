// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Tracing the DOM Tree

function domTreeTracer(id) {
	let node = document.getElementById(`${id}`);
	let siblingsArray = Array.prototype.slice.call(node.parentNode.children);
	siblingsArray = siblingsArray.filter(child => child.tagName !== "SCRIPT")
															 .map(child => child.tagName);

	if (id === 1) return [[...siblingsArray]];

	return [[...siblingsArray]].concat(domTreeTracer(+node.parentNode.id));
}