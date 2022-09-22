/*
The wordCap function takes a string as an argument and returns that string with 
the first character of every word capitalized and all subsequent characters in 
lowercase. It is assumed that a word is any sequence of non-whitespace 
characters.

The function first splits the words of the string into an array. For each 
element of the array, the element is reassigned to itself, properly formatted 
(first letter capitalized and the rest in lowercase). The array is then rejoined
to a single string, each element separated by a ' ' character. 
*/

function wordCap (string) {
  return string.split(' ').map(word => {
    return word = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// test cases
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'