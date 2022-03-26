/*
The triangle function takes the "length" argument, a positive integer, and 
logs a right triangle whose sides each have "length" stars. The triangle is 
oriented so that one end of the hypotenuse is at the lower-left of the triangle,
and the other end at the upper-right.
*/

function triangle (length) {
  for (let i = 1; i < length; i++) {
    console.log(`${' '.repeat(length - i)}${'*'.repeat(i)}`);
  }
}

// test cases
triangle(5);
triangle(9);