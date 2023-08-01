// JS210 Exercises | Debugging
// Exercise 2 - Reserved Keywords

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
	for (let keyword of RESERVED_KEYWORDS) {
		if (name === keyword) return true;
	}

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/*
The error with the provided code was that it used the 'return' operator within
the callback function of the forEach() method. The return value is returned to
the callback function, but not the isReserved function itself. In order, to
iterate through the elements of RESERVED_KEYWORDS and return a value to
isReserved, a standard for-loop (or of the like) must be used.
*/