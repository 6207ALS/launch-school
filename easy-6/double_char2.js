/*
The doubleConsonants function takes a string, doubles every consonant character 
in the string, and returns the result as a new string. The function does not 
double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

The function iterates over each character of the string and tests a regular
expression on it. It determines if it is a consonant by testing if it is a 
letter from a-z but not the letters a, e, i, o, or u. If it is not a 
consonant the function adds the character to the new string. If it is, it adds 
two of the character to the string.   
*/

function doubleConsonants (string) {
  let doubleString = "";
  for (character of string) {
    if (!(/(?=[a-z])(?=[^aeiou])/i.test(character))) {
      doubleString += character;
    } else {
      doubleString += character.repeat(2);
    }
  }
  return doubleString;
}

// test cases
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""