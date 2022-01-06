// return foo() ? 'bar' : qux();
// This particular ternary operator asks to return 'bar' or qux() if foo()
// evaluates to true or false, respectively. We can convert this into an
// if statement. 

if (foo()) {
  return 'bar';
} else {
  return qux();
}





