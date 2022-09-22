/*
The letterCaseCount function takes a string and returns an object containing 
three properties: one representing the number of characters in the string that
are lowercase letters, one representing the number of characters that are 
uppercase letters, and one representing the number of characters that are 
neither. 

The function first initializes an object to count the number of lowercase 
letters, uppercase letters, and characters that are neither. It then iterates 
over each character of the string. If the character is not equal to its 
character capitalized, the character is a lowercase letter. If the character
is not equal to its character lowercased, the character is an uppercased letter. 
If the character is equal to itself in both cases, the character is not an 
alphabetical character.  
*/

function letterCaseCount (string) {
  let counter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  for (character of string) {
    if (character !== character.toUpperCase()) {
      counter["lowercase"] += 1;
    } else if (character !== character.toLowerCase()) {
      counter["uppercase"] += 1;
    } else {
      counter["neither"] += 1;
    }
  }

  return counter;
}

// test cases
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }