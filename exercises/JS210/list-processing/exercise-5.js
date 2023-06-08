// JS210: Small Problems - List Processing
// Exercise 5

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(str) {
  let substrings = [];

  for (let i = 1; i <= str.length; i++) {
    substrings.push(str.slice(0, i));
  }

  return substrings;
}

module.exports = leadingSubstrings;