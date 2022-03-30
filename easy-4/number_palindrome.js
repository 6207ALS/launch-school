/*
The isPalindromicNumber function determines if a passed integer is a palindrome.

The function passes the string representation of the integer into the 
isPalindrome function (from exercise "Easy 4: Palindromic Strings (Part 1").
*/

function isPalindrome (string) {
    return string === string.split('').reverse().join('');
}

function isPalindromicNumber (number) {
    return isPalindrome(String(number));
}

// test cases
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true