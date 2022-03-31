/*
The isPalindrome function determines if if the string passed as an argument is 
a palindrome. A palindrome reads the same forwards and backwards. For this case,
the case matters and all, including non-alphabetical, characters matter.

The function simply compares the string to its reversed version. You can 
reverse a string by placing its characters in an array, reversing order of the
elements, and rejoining the elements back together.  
*/

function isPalindrome (string) {
  return string === string.split('').reverse().join('');
}

// test cases
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true