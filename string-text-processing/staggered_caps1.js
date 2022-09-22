/*
The staggeredCase function takes a string as an argument and returns that string
with a staggered capitalization scheme. Every other character, starting from the
first, is capitalized and followed by a lowercase or non-alphabetic character. 
Non-alphabetic characters are not changed, but are counted as characters for 
determining when to switch between upper and lower case.

The staggeredCase function first converts the string to lowercase and splits 
each character into an array. A for loop that increments by a value of 2 is 
used to access every other element of the array. Each element is reassigned to 
itself in upper case. The array is then rejoined to a single string. 
*/

function staggeredCase (string) {
  let staggeredString = string.toLowerCase().split('');
  for (let i = 0; i < string.length; i += 2) {
    staggeredString[i] = staggeredString[i].toUpperCase();
  }
  return staggeredString.join('');
}

// test cases
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"