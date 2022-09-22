/*
The isOdd function determines if a given integer is odd or not. If the integer
cannot be evenly divided by 2, the integer is an odd number. Else, it is an even
number. 
*/

function isOdd(integer) {
    return Math.abs(integer) % 2 === 1;
}

// test cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true