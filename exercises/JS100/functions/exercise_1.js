let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Calling the foo function will not affect the value of the global bar variable. 
// The bar variable declared in the foo function is limited to its own scope, and
// is its own entity. Thus, line 7 will output 1. 