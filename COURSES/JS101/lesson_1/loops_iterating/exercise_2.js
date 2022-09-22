// The following function will return the factorial of a given number, using
// a for loop. 

function factorialNum(num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }

  return product;
}

// test cases

console.log(factorialNum(1));
console.log(factorialNum(2));
console.log(factorialNum(3));
console.log(factorialNum(4));
console.log(factorialNum(5));