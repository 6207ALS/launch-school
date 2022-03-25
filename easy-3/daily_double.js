/*
The crunch function takes the provided string argument and returns the value
with all consecutive duplicative characters collapsed into a single character. 
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