// JS230 - Front-end Development with JavaScript
// Exercises | DOM Traversing, Querying, and Manipulation - Counting Nodes

/*
<div>
  <p>Then press the <em>Draw</em> button</p> 
</div>
*/

/*
HTML
HEAD BODY
			 DIV
				 #TEXT P #TEXT
				 			 #TEXT EM #TEXT
							 			 #TEXT

There is a total of 11 nodes in the DOM node tree for the above HTML snippet. 
It should be noted that a HTML snippet will be provided the required "html," 
"head," and "body" tags in the DOM. As such, the required nodes appear in the 
DOM node tree shown above.

In addition, empty #TEXT nodes appear in the node tree to represent the
indentations shown in the HTML code snippet. For instance, the indentation
between the DIV and P tags is represented as a child node of the DIV node in
the form of an empty #TEXT node.
*/


/*
<div><p>Then press the <em>Draw</em> button.</p></div>
*/

/*
HTML
HEAD BODY
		 DIV
		 P
		 #TEXT EM TEXT

There is total of 8 nodes in the DOM node tree for the above HTML snippet. 
Again, the necessary "html," "head," and "body" nodes are automatically inserted
in the DOM.
Unlike the previous HTML snippet, the HTML snippet does not have any indentation
(whitespace) in between tags. As such, the DOM node tree does not need any
empty text nodes.
*/
