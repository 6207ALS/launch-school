/*
The negative function takes a number as an argument. If the argument is a 
positive number, it returns the negative of that number. If the argument is a 
negative number, the function returns it as-is.

The function simply checks if the argument is less than 0, indicating that it is 
a negative number. If it is, the number is returned. If not, the negative of 
the number is returned instead. 
*/

function negative (number) {
  return number < 0? number: -number;
}

// test cases
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0