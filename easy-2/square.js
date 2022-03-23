/*
In continuation of exercise "Easy 2: Multiplying Two Numbers", the square 
function returns the square of its argument utilizing the multiply 
function.  
*/

function multiply (num1, num2) {
  return num1 * num2;
}

function square (num) {
  return multiply(num, num);
}

// test cases
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true