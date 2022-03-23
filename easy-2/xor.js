/*
The xor function returns true if exactly one of its arguments is truthy, false
otherwise. 

It does so by comparing the truthiness value of each argument. If both
arguments have the same truthiness (true / true or false / false), then 
they fail to have exactly one truthy value. Conversely, if the arguments
have differing truthiness values (true / false or false / true), then they 
have exactly one truthy value. 
*/

function xor (arg1, arg2) {
  return !!arg1 !== !!arg2;     
}

// test cases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);