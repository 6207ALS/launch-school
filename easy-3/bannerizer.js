/*
The logInBox function will take a short line of text, and write it to the 
console log within a box. The function determines how many characters are needed
to construct each line through the length of the text. 
*/

function logInBox(string) {
  console.log('+' + ('-'.repeat(string.length + 2)) + '+');
  console.log('|' + (' '.repeat(string.length + 2)) + '|');
  console.log("| " + string + " |");
  console.log('|' + (' '.repeat(string.length + 2)) + '|');
  console.log('+' + ('-'.repeat(string.length + 2)) + '+');
}

// test cases
logInBox('To boldly go where no one has gone before.');
logInBox('');