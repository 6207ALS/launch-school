// JS210: Small Problems - List Processing
// Exercise 7
const substrings = require("./exercise-6.js");

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(word) {
  return word === word.split("").reverse().join("") && word.length > 1;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]
palindromes('knitting cassettes');