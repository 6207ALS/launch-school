// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Practice Problems - Capturing and Bubbling (1)


// Q1
// let elem1 = document.querySelector('#elem1');
// let elem4 = document.querySelector('#elem4');

// elem1.addEventListener('click', event => alert(event.currentTarget.id), true);
// elem4.addEventListener('click', event => alert(event.currentTarget.id));


// Q2

let divs = document.querySelectorAll('.pick');

for(let index = 0; index < divs.length; index += 1) {
  divs[index].addEventListener('click', highlightThis, true);
}
    
function highlightThis(e) {
  alert(`${this.className} ${e.currentTarget.tagName}`);
}


// [div.d1.pick, div.d2.pick, div.d4.pick]

/*
When clicking on div "4", the browser alerts...
	- the outermost div's classes and tag name: d1 pick DIV
	- the main div's classes and tag name: d2 pick MAIN
	- the section div's classes and tag name: d4 pick SECTION
in the stated order AND as individual alerts.

The order in which the specified alerts appear are determined by the 
"useCapture" parameter for each of the div's "addEventListener" methods. When 
the "useCapture" parameter is "true", the listeners are fired during the 
"capture" phase of the click event. As such, the order in which the listeners 
are fired is from the outermost divs to the innermost divs.
*/

/*
document.querySelector('.d3').addEventListener('click', highlightThis, false);

When adding the line of code shown above, divs with the ".d3" class are given an
event listener - with the same handler as the divs from the previous problem.
However, the "useCapture" parameter of "addEventListener" is set to "false".
As such, the listener will only trigger during the bubbling phase of the event.
When clicking on the red "3" div, the following alerts appear:
	- the outermost div's classes and tag name: d1 pick DIV
	- the main div's classes and tag name: d2 pick MAIN
	- the target div's classes and tag name: d3 DIV

It should be noted, however, that the order in which the alerts appear will
differ when clicking on the innermost div (yellow "4" div):
	- the outermost div's classes and tag name: d1 pick DIV
	- the main div's classes and tag name: d2 pick MAIN
	- the section div's classes and tag name: d4 pick SECTION
	- the target div's classes and tag name: d3 DIV

This is because listeners from the capture phase are first triggered, then the
listeners from the bubble phase.
*/


// Q3
/*
The browser will send two alerts when the yellow div is clicked. The following 
alerts will appear from the browser (in the specified order):
	- The id of the green box: elem1
	- The id of the yellow box: elem4

The order in which the alerts appear are determined by whether or not the
listeners are set to trigger during the "capture" or "bubbling" phase of an
event. The green div is set to trigger during the capture phase. As such, it
will trigger its listener. Then, during the "bubbling" phase, the target element 
first triggers its event listener. 
It should be noted that although the orange box appears to be the outermost div, 
it is NOT nested with the other divs. It merely appears like so - through the 
use of CSS styling. It does not trigger its event listener as it is not covered
anywhere within the capturing/bubbling phase of the yellow div.
*/