// LS215: A General Problem Solving Approach
// An Example Problem - Problem 1

/* 
Write a program that cleans up user-entered phone numbers so that they can be 
sent as SMS messages. Other than digits, the number may also contain special 
character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use 
the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.
*/

/*
PROBLEM:
Given a string that represents a user's phone number, return a properly
formatted number used for SMS messages.

Input: String
Output: String

RULES: 
- If the phone number is less than 10 digits, assume that it is a bad number.
- If the phone number is 10 digits, assume that it is good.
- If the phone number is 11 digits and the first number is 1, trim the 1 and use 
  the last 10 digits.
- If the phone number is 11 digits and the first number is not 1, then it is a bad number.
- If the phone number is more than 11 digits, assume that it is a bad number.
- For bad numbers, just a return a string of 10 0s.
- Other than digits, the number may also contain special character such as 
  spaces, dash, dot, and parentheses that should be ignored.
- will there be characters other than spaces, dash, dot, and parentheses 


EXAMPLES:

formatNumber("012345678") -> "0000000000" less than 10 digits
formatNumber("0123456789") -> "0123456789" 10 digits
formatNumber("12345678911") -> "2345678911" 11 digits, start with 1
formatNumber("23456789111") -> "0000000000" 11 digits, doesn't start with 1
formatNumber("234567891234") -> "0000000000" more than 11 digits
formatNumber("123456789)") -> "0000000000" less than 10 digits
formatNumber("-1234567891)") -> "1234567891" first DIGIT is 1
formatNumber("-123456789123)") -> "0000000000" more than 11 digits

NOTES:
  - function should keep note of total number of DIGITS (numbers) NOT characters
  - remove any special characters (" ", ".", "-", "()") before inspection
  - determine number of digits
    if less than 10 digits
      return "0000000000"
    if exactly 10 digits
      return 10 digits
    if 11 digits
      if starts with 1
        return last 10 digits
      else
        return "000000000"
    if more than 11 digits
      return "000000000"

DATA STRUCTURE:
  options: string, array
  CHOICE: array

ALGORITHM:
    STRIP INPUT OF SPECIAL CHARACTERS
    DETERMINE LENGTH OF RESULTING DIGITS

    if less than 10 digits
      return "0000000000"
    if exactly 10 digits
      return 10 digits
    if 11 digits
      if starts with 1
        return last 10 digits
      else
        return "000000000"
    if more than 11 digits
      return "000000000"
*/


function formatNumbers(number) {
  number = number.replaceAll(/[^0-9]/ig, "");

  if (number.length === 10) {
    return number;
  } else if (number.length < 10 || number.length > 11) {
    return "0000000000";
  } else if (number.length === 11) {
    if (number[0] === "1") {
      return number.slice(1);
    } else {
      return "0000000000";
    }
  }
}

console.log(formatNumbers("012345678")); 
console.log(formatNumbers("0123456789"));
console.log(formatNumbers("12345678911"));
console.log(formatNumbers("23456789111"));
console.log(formatNumbers("234567891234"));
console.log(formatNumbers("123456789)"));
console.log(formatNumbers("-1234567891)"));
console.log(formatNumbers("-123456789123"));