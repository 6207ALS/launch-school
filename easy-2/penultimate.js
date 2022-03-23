/*
The penultimate function returns the second-to-last word of a string argument. 
Words are defined as a sequence of non-blank characters, and the program will
always assume the string argument contains at least two words. 
*/

function penultimate (string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

// test cases
console.log(penultimate("last word") === "last");             // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
