/* 
The isNegativeZero function determines if the passed argument is a -0 value. 
If any non-zero integer is divided by 0, Javascript will evaluate it to be
positive infinity. Similarly, if any non-zero integer is divided by -0, the
result will be negative infinity. The function checks if 1 divided by the 
passed argument is equal to negative infinity. If so, return true (else return
false).
*/

function isNegativeZero(num) {
  return 1/num === -Infinity;
}


// test case

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(2));