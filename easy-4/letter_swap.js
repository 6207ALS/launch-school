/*
The swap function takes a string of words separated by spaces, and swaps the
first and last letter of every word. It is assumed that every word contains at 
least one letter, and that the string will always contain at least one word. It 
is also assumed that each string contains nothing but words and spaces, and that
there are no leading, trailing, or repeated spaces.

First, the function splits the words of the string into an array. For each word,
the letters are also split into an array. The values of the first and last 
element of the array (first and last letters) are swapped and rejoined into a 
single word. The original word is reassigned the new word. 
*/

function swap (string) {
  words = string.split(' ');
  for (word of words) {
    let chars = word.split('');
    let first = chars[0];

    chars[0] = chars[chars.length - 1];
    chars[chars.length - 1] = first;
    words[words.indexOf(word)] = chars.join('');
  }
  return words.join(' ');
}

// test cases
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"