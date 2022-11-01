/*
JavaScript does not support overloading, meaning, if two functions with the same
name are defined, only the last one will be executed. In other words, the last
function will override any other previous definitions of the function. In the
bugged version of the code, only the second "range" function is executed. When 
the function attempts to execute range(10, 20), the second argument is ignored 
and  value 10 is passed as end. Then, the range function repeatedly calls
range(0, end) until an exceedingly number of call stacks are made. 

Further, the first range function failed to return a correct array when a single
argument is provided. To correct this, a line was added: if a second arguement
(end) is not provided, end becomes the value of start and start becomes the 
value of 0. 
*/

function range(start, end) {
  let range = [];

  if (!end) end = start, start = 0;  
  for (let element = start; element <= end; element++) {
    range.push(element);
  }
  
  return range;
}

// test cases
console.log(range(10, 20));
console.log(range(5));