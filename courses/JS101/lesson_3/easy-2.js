/*
Answers for JS101 - Lesson 3, Practice Problems: Easy 2
*/


// Q1 
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice = advice.replaceAll('important', 'urgent');

/*
The .replaceAll() function can be used to replace any occurrence of the word 
"important" with "urgent". 
*/


// Q2
let numbers = [1, 2, 3, 4, 5];
let numbersReversed = [...numbers].reverse();

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbersReversed); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbersReversed = [...numbers].sort((num1, num2) => num2 - num1);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbersReversed); // [ 5, 4, 3, 2, 1 ]

/*
To avoid mutating the original arrays, we can initialize a new variable with
the same values, using the spread operator. The methods .reverse() and .sort()
can then be used on the new variables.  
*/


// Q3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
console.log(numbers.includes(number1));
let number2 = 95; // true
console.log(numbers.includes(number2));

/*
You can use the .includes() method to determine if a given value is included
in the array. 
*/


// Q4
let famousWords = "seven years ago...";
let fullPhrase = "Four scores and " + famousWords;

console.log(fullPhrase); // Four scores and seven years ago...
fullPhrase = "Four scores and ".concat(famousWords);
console.log(fullPhrase); // Four scores and seven years ago...

/*
One method would be to use the + operator to concatenate the two strings 
together. The second method is to use the .concat() method which effectively 
achieves the same results: concatenate "seven years ago..." to "Four scores 
and ". 
*/


// Q5 
let array = [1, 2, 3, 4, 5];

array.splice(2, 1);
console.log(array);

/*
The .splice() method can be used to remove a given number of elements starting
from a given index. The arguments 2 and 1 are used to remove 1 element starting
from index 2. 
*/


// Q6
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newFlintstones = [];

// first method
flintstones.forEach(element => newFlintstones = newFlintstones.concat(element));
console.log(newFlintstones);

// second method
newFlintstones = [].concat(...flintstones);
console.log(newFlintstones);

/*
The .forEach() method, along with the .concat() method, can be used to iterate
over each element of the flintstones array. The .concat() method will either
add a string or the elements of an array. 

The second method uses the .concat() method on an empty array literal, with its
argument as the elements of the flintstones variable. Both effectively achieve
the same results
*/


// Q7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barneyScore = 
  Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(barneyScore);

/*
The Object.entries() function can be used to return an array of an object's 
key-value pairs, each in their own array. The .filter() method can be used on
the returned array. Only subarrays with its first element (key property) named
"Barney" are kept in the array. Finally, .shift() is used to retrieve the first
subarray of the array. 
*/


// Q8
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

/*
The function Array.isArray() can be used to determine if a given value is an
array or not. A boolean value is returned (true / false).
*/


// Q9
const WIDTH = 40;
let title = "Flintstone Family Members";
let space = ' '.repeat(Math.floor((WIDTH - title.length) / 2)); 
let centeredTitle = space + title;

console.log(centeredTitle);

/*
The space needed for the left and right side of the title can be calculated by
subtracting the title length from the width, and dividing the result by 2. 
The new title is the concatenation of the determined space and the title.  
*/


// Q10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(character => character === "t").length);
console.log(statement2.split('').filter(character => character === "t").length);

/*
Each string is first split character-by-character into an array. The array is 
then filtered to 't' characters. The length of the array is returned. 
*/