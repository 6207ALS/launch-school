// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Delegate Event Function

/*
PROBLEM:
Implement a function named delegateEvent that delegates events to the descendant
(inner) elements of a parent element that match a given selector.

Input: Object, String, String, Function
Output: True / undefined

RULES:
- Assume that all event handlers listen during the bubbling phase.
- The function takes four arguments: 
  - parentElement, selector, eventType, and callback.

- It returns true if it was able to add an event listener and undefined if it 
  wasn't.
- For example, if the "parentElement" is a section element and selector is a p
  element, the function should delegate events of "eventType" on the p element 
  within section to the function callback; consequently, the function 
  returns true.
- If the function cannot find an element using the given "parentElement"
  argument, return undefined
- If the "parentElement" exists, function should add event listener to it,
  even if the callback function will never trigger.

- Assume all arguments will be provided and be the expected data types.

REQUIREMENTS:
  - If "parentElement" is null, return undefined
  - Add an event listener to the parentElement, with the event type being the
    "eventType" argument.
  - The event handler should do the following:
    - find all elements that fall under the selector: parentElement + selector
    - if the target is one of the elements, call the callback function, passing
      in the event's target and currentTarget.
  - return true
*/

function delegateEvent(parentElement, selector, eventType, callback) {
  if (!parentElement || !(parentElement instanceof HTMLElement)) return undefined;

  parentElement.addEventListener(eventType, event => {
    let completeSelector = `${parentElement.tagName.toLowerCase()} ${selector}`;
    let validTargets = document.querySelectorAll(completeSelector);
    validTargets = Array.prototype.slice.call(validTargets);
    if (validTargets.includes(event.target)) {
      callback(event);
    }
  });

  return true;
}

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

const newP = document.createElement('P');
const newContent = document.createTextNode('New Paragraph');
newP.appendChild(newContent);

element2.appendChild(newP);

console.log(delegateEvent(element2, 'p', 'click', callback));