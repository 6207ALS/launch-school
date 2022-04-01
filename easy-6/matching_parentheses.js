/*
The isBalanced function takes a string as an argument and returns true if all 
parentheses in the string are properly balanced, false otherwise. To be properly
balanced, parentheses must occur in matching '(' and ')' pairs.

The function first removes all non-parenthese characters from the string. In
a while loop, the function repeatedly removes every pair of '(' and ')' 
characters from the string. A pair exists only if a ')' character exists 
anywhere after the first occuring '(' character. If there isn't, the loop ends. 
It then returns the opposite truthy value of the end string. If it is an empty 
string, it means all parentheses had a matching pair. If characters still 
remain, not all parentheses had a match. 
*/

function isBalanced (string) {
  string = string.replace(/[^()]/ig, '');
  let length = string.length;
  
  while (length > 0 && string.includes('(')) {
    if (string.indexOf('(') < string.indexOf(')')) {
      string = string.replace('(', '');
      string = string.replace(')', '');
    } else {
      break;
    }
  }
  return !string;
}

// test cases
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);