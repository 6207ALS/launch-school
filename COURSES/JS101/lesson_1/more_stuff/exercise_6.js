/*
The allMatches function filters a given array of strings for elements that 
match a given regular expression. It return the elements in an array. 
*/

function allMatches(arr, regEx) {
  // uses filter method to check if each element passes the regular expression
  return arr.filter(string => regEx.test(string));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// test case
console.log(allMatches(words, /lab/));