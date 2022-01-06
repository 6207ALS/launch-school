// This function returns the factorial of a given number using recursion,
// assuming the argument is always a positive integer.

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

// test cases

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));