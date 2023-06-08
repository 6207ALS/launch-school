// JS210: Small Problems - List Processing
// Exercise 6
const leadingSubstrings = require("./exercise-5.js");

function substrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    substrings.push(...leadingSubstrings(str.slice(i)));
  }

  return substrings;
}

substrings('abcde');
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/


// Further Exploration
function substrings2(str) {
  return str.split("")
    .map((_, index) => leadingSubstrings(str.slice(index)))
    .reduce((acc, arr) => acc.concat(arr), []);
}

substrings2('abcde');

module.exports = substrings;