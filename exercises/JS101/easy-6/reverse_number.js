/*
The reverseNumber function takes a positive integer as an argument and returns 
that number with its digits reversed.

The function splits — .split() — the string representive of the number into an 
array and reverses — .reverse() — the order of the elements. It then joins —
.join() — the elements back together and returns the resulting string as a 
number.  
*/

function reverseNumber (num) {
  let reverseDigits = Number(String(num).split('').reverse().join(''));
  return reverseDigits;
}

// test cases
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1