/*
The swapName function takes a string argument consisting of a first name, a 
space, and a last name, and returns a new string consisting of the last name, 
a comma, a space, and the first name.

The function first splits the string by the middle space to separate the first
and last names. It then returns a template literal consisting of the last name,
a comma, a space, and the first name. 
*/

function swapName (string) {
  let firstAndLast = string.split(' ');
  return `${lastToFirst[1]}, ${lastToFirst[0]}`;
}

// test case
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"