/*
The previous version of the isReserved() function used the .forEach() method to 
iterate over each element of the RESERVED_KEYWORDS array. However, the 
.forEach() method uses a callback function for each element. Even if the word
argument was equal to one of the reserved keywords, the value true would be 
returned to the callback function, not to the isReserved function. 

To change it to its intended functionality, a for/of loop, or any of the like,
should be used. The for/or loop iterates over each element of the array, and
in our case, returns true to the isReserved function if the condition is met.
Unlike the .forEach() method, it will not return true to a callback function. 
*/

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  for (word of RESERVED_KEYWORDS) {
    if (name === word) return true;
  }
  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true