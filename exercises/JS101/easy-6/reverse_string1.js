/*
The reverseSentence function takes a string argument and returns a new string 
containing the words from the string argument in reverse order.

The function splits the words of the string by its space characters and reverses
the order of the returned array. The array is then joined back together as one 
string, each element separated by a space character. 
*/

function reverseSentence (string) {
  return string.split(' ').reverse().join(' ');
}

// test cases
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"