/*
The removeVowels function takes an array of strings and returns an array of the 
same string values, but with all vowels (a, e, i, o, u) removed.

The function iterates over each string of the given array. It then reassigns the
string with the same string, except vowel characters replaced with a '' 
character, with the .replace() method.
*/

function removeVowels (arr) {
  return arr.map(element => element.replace(/[aeiou]/ig, ''));
}

// test cases
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]