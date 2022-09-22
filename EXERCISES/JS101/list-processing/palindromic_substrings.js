/*
In continuation of the substring exercises in "List Processing"...
The palindromes function returns a list of all palindromic substrings of a 
string.

The function uses the substrings function to find all possible substrings of the
given string. It then loops through each substring, determining if it is 
palindromic. If it is, the string is added to the returned list of palindromic 
substrings.
*/

function isPalindrome (string) {
  if (string.length === 1) return false;
  return string === string.split('').reverse().join('');
}

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

function palindromes(string) {
  let palindromes = [];
  let listOfSubstrings = substrings(string);
  for (element of listOfSubstrings) {
    if (isPalindrome(element)) palindromes.push(element);
  }
  return palindromes;
}

// test cases
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]