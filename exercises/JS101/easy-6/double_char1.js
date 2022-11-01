/*
The repeater function takes a string, doubles every character in the string, and
returns the result as a new string.

The function iterates over every character of the string, doubles it with the
.repeat() method and adds it to a new string.
*/

function repeater (string) {
  let doubleString = "";
  for (character of string) {
    doubleString += character.repeat(2);
  }
  return doubleString;
}

// test cases
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""