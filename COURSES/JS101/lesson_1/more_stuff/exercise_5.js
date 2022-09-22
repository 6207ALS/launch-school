function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
The function takes a string and applies multiple methods to it. It first
splits up the string by space characters and returns the values in an new 
array (non-mutating method). It then reverses the order of the values within
the array (mutating method). Finally, it iterates through the reversed array
and records each element's length value into a new array (non-mutating method),
which the function returns. 
*/ 