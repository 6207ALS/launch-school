/*
In continuation of exercise "Easy 4: Palindromic Strings (Part 1)"
The isRealPalindrome function determines if a string is a palindrome, ignoring
letter case and non-alphanumeric characters. 

The function removes non-alphanumeric characters by using a RegEx expression to
find such characters. It also handles case sensitivity by converting the string 
to lower case. The isPalindrome function (from Part 1) is then used to determine
if the newly filtered string is a palindrome. 
*/

function isPalindrome (string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome (string) {
  let cleanString = string.replace(/[^a-z0-9]/ig,'').toLowerCase();
  return isPalindrome(cleanString);
}

// test cases
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false