// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Practice Problems - Capturing and Bubbling (2)


// Q1
/* 
- click event listener of the div (id: "elem1") listening on the bubbling
phase
  - alerts the "tagName" property of the element which triggered the event
    (the innermost yellow div)

- click event listener of the div (id: "elem1") listening on the bubbling
phase
  - alerts the "tagName" property of the element that the event listener is
    attached to (the "elem1", green div).
*/


// Q2
/*
- click event listener of the div (id: "elem1") listening on the capturing
phase (second one)
  - the third "useCapture" parameter is set to false, which sets the event
  listener to trigger during the "capturing phase"
  
- click event listener of the div (id: "elem1") listening on the bubbling
phase (first one)
  - the third "useCapture" parameter defaults to false, which sets the event
  listener to trigger during the "bubbling phase"
*/


// Q3
/*
- click event listener of the document listening on the bubbling
phase (second one)
  - alerts the clicked element's "tagName" property ("DIV") after 7 seconds.

- keypress event listener of the document listening on the bubbling
phase (first one)
  - alerts the pressed key's "code" property ("KeyQ") after 7 seconds.

  - keypress event listener of the document listening on the bubbling
phase (first one)
  - alerts the pressed key's "code" property ("KeyW") after 7 seconds.

- click event listener of the document listening on the bubbling
phase (second one)
  - alerts the clicked element's "tagName" property ("MAIN") after 7 seconds.
*/

