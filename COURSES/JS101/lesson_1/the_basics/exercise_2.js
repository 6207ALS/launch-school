let num = 4936;   

let ones = num % 10;        // 6

num -= ones;    // 4930
num /= 10;      // 493

let tens = num % 10;        // 3

num -= tens;    // 490
num /= 10;      // 49

let hundreds = num % 10;    // 9

num -= hundreds;    // 40
num /= 10;          // 4

let thousands = num;        // 4

console.log(num, hundreds, tens, ones);

