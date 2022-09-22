/*
The wordLengths function takes a string as an argument and returns an array that
contains every word from the string, with each word followed by a space and the 
word's length. If the argument is an empty string or if no argument is passed, 
the function returns an empty array. It is assumed that every pair of words in 
the string will be separated by a single space.

The function first initializes an empty array and checks if the passed argument
is an empty string or undefined (no argument). If it is, then the empty array
is returned. If not, the empty array is reassigned to the string's elements 
split into an array. Each element is then reassigned to its value followed 
by a space and the value's length. 
*/

function wordLengths (string) {
  let words = [];
  if (string) {
    words = string.split(' ').map(word => word + ` ${word.length}`);
    return words;
  } else {
    return words;
  }
}

//test cases
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []