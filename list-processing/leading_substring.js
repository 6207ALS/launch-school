/*
The leadingSubstrings function takes a string argument and returns a list of 
substrings of that string. Each substring should begin with the first letter of 
the word, and the list should be ordered from shortest to longest.

Using a for loop, the function adds substrings of different lengths to the 
returned array. The substrings are characters from indices 0 to the current 
iterator value.  
*/

function leadingSubstrings (string) {
  let substrings = [];

  for (let i = 1; i <= string.length; i++) {
    substrings.push(string.slice(0, i));
  }
  return substrings;
}

// test cases
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]