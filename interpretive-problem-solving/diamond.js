/*
The diamond function displays a four-pointed diamond in an nxn grid, where n is 
an odd integer supplied as an argument to the function. It is assumed that the 
argument will always be an odd integer.

The function first determines the number of asterisks needed for each line of 
the diamond. From [1, n], every odd number is recorded in an array. And from 
(n, 1], every odd number is recorded again. In addition to number of asterisks 
per line, the function must also determine the number of whitespace characters 
per line. A general formula is used: (n - (# of asterisks)) / 2. Iterating over
each number in the list, a number of whitespace characters and asterisks is 
printed. 
*/

function diamond (n) {
  let asteriskSequence = [];
  let increment = 2; 
  let num = 1;
  while (num > 0) {
    asteriskSequence.push(num);
    if (num === n) increment = -2;
    num += increment;
  }
  
  asteriskSequence.forEach(asterisk => {
    console.log(' '.repeat((n - asterisk) / 2) + '*'.repeat(asterisk));
  });
}

diamond(1);
// logs 
//  *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
//   logs
//    *
//   ***
//  *****  
// *******
//*********
// *******
//  *****
//   ***
//    *