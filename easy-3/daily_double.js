/*
The crunch function takes the provided string argument and returns the value
with all consecutive duplicative characters collapsed into a single character.

The function iterates over each character of the string argument. If the current
character is not the same as the previous character — meaning it is not a 
consecutive duplicate character — then it is added to the "crunched" string. 
*/

function crunch(string) {
  let crunchedString = '';
  let previousCharacter;

  for (currentCharacter of string) {
    if (currentCharacter !== previousCharacter) {
      crunchedString += currentCharacter;
    }
    previousCharacter = currentCharacter;
  }

  return crunchedString;
}

// test case
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""