/*
The wordToDigit function takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character.

The function first constructs a list of strings, each element being the English
word of numbers 0 - 9. It then iterates over word of the list. If the string 
argument contains the word, every occurrence of the word is replaced with the
number representation of the word. 
*/

function wordToDigit (string) {
  let numbers = [
    'zero', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine'
  ]

  for (word of numbers) {
    if (string.includes(word)) {
      string = string.replaceAll(word, String(numbers.indexOf(word)));
    }
  }
  return string;
}

// test case
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."