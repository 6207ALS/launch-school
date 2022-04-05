/*
The swapCase function takes a string as an argument and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter 
changed to lowercase. All other characters are unchanged.

The function first initializes an empty string literal. It then iterates through
every character of the string. If the character is uppercased, the lowercased 
character is added to the string. If the character is lowercased, the uppercased
character is added to the string. If the character is neither (implying the 
character is not alphabetical) the character is added unchanged. 
*/

function swapCase (string) {
  let swappedCases = '';
  for (character of string) {
    if (character !== character.toUpperCase()) {
      swappedCases += character.toUpperCase();
    } else if (character !== character.toLowerCase()) {
      swappedCases += character.toLowerCase();
    } else {
      swappedCases += character;
    }
  }
  return swappedCases;
}

// test cases
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"