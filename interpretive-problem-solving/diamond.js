/*
The diamond function displays a four-pointed diamond in an nxn grid, where n is 
an odd integer supplied as an argument to the function. It is assumed that the 
argument will always be an odd integer.

The function breaks down the process into two parts: the top half of the diamond
and the bottom half of the diamond. Every line is composed of whitespace 
characters and asterisk(s). A formula is used to determine the number of 
whitespace characters: (n - (# of asterisks needed for the line)) / 2. 
The number of asterisks needed for every line (for the top half) is the series 
of odd numbers all the way to n. The process for the bottom half is similar. 
The bottom half begins n - 2 number of asterisks and decrements by 2 until it
reaches to 1 asterisk. 
*/

function diamond (n) {
  for (let i = 1; i <= n; i += 2) {
    let space = (n - i) / 2;
    console.log(' '.repeat(space) + '*'.repeat(i));
  }

  for (let j = n - 2; j > 0; j -= 2) {
    let space = (n - j) / 2;
    console.log(' '.repeat(space) + '*'.repeat(j));
  }
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