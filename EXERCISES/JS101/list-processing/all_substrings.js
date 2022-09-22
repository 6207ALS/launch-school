/*
In continuation of exercise "List Processing: Leading Substrings"...
The substrings function returns a list of all substrings of a string. All 
substrings that start at index position 0 come first, then all substrings that 
start at index position 1, and so on. In addition, the substrings at a given 
index are added to the list from shortest to longest.

The function loops over each character of the string, finding the substring of 
the current character to the end of the string. It then uses the 
leadingSubstrings function from the previous exercise to find all of the current
string's substrings. 
*/

function leadingSubstrings (string) {
  let substrings = [];

  for (let i = 1; i <= string.length; i++) {
    substrings.push(string.slice(0, i));
  }
  return substrings;
}

function substrings (string) {
  let allSubstrings = [];
  for (let i = 0; i < string.length; i++) {
    let currentString = string.slice(i, string.length);
    allSubstrings = allSubstrings.concat(leadingSubstrings(currentString));
  }
  return allSubstrings;
}

// test case 
console.log(substrings('abcde'));       

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]