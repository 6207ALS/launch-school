/*
Answers for JS101 - Lesson 3, Practice Problems: Easy 3
*/


// Q1

// method 1
let numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// method 2
numbers = [1, 2, 3, 4];

numbers.length = 0;
console.log(numbers);

// method 3
numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);
console.log(numbers);

/*
There are various methods to remove the values of an array. One method is to 
repeatedly call .pop() on the array until the array length is 0. Another method
would be to declare the array's length to 0, effectively truncating it. Another
method would be to use the .splice() method. The given arguments (0 and 
numbers.length) indicate to remove "numbers.length" number of elements starting 
at index 0. 
*/


// Q2
console.log([1, 2, 3] + [4, 5]);

/*
The code above will print the string "1,2,34,5". When using the + operator on 
arrays, the arrays are converted to strings. The strings are the elements of the
array, separated by commas.  
*/


// Q3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*
The code above will log "hello there" to the console. The code does not change 
str1's value, besides its initialization. 
*/


// Q4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
The code above will log "[{ first: "value1" }, { second: "value2" }, 3, 4, 5]"
to the console. arr2 is initialized with the .slice() method on arr1. The method
returns a new array with the values of arr1. For that reason, changing the 
elements of arr2 will not affect the values of arr1. 
*/


// Q5
function isColorValid (color) {
  return color === "blue" || color === "green";
}

let isColorValidAlternative = color => color === "blue" || color === "green";

/*
In the first method, an equality expression returns a boolean value 
(true / false) so separate return statements are not needed. 

In the second method, an arrow function is used to avoid using a return 
statement. 
*/