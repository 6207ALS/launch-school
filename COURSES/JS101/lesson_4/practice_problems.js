/*
Answers for JS101 - Lesson 4, Practice Problems
*/


// Problem 1
[1, 2, 3].filter(num => 'hi');

/*
The return value of the code above is a new array with the values [1, 2, 3]. 
The .filter() method will iterate over each element of the array and add it to
the returned array if the return value of the callback function is true. The
return value of the callback function for every element is the string literal 
'hi', which has a truthiness value of true. 
*/


// Problem 2
[1, 2, 3].map(num => {
  num * num;
});

/*
The return value for the code above is a new array with the values 
[undefined, undefined, undefined]. The .map() method transforms each element of
the array into the return value of the callback function. However, with the use
of curly braces and no explicit return statement, the callback function does not
have a return value. Thus, undefined is returned for each iteration of the 
array's elements. 
*/


// Problem 3
[1, 2, 3].map(num => num * num);

/*
The code above will return a new array with the values [1, 4, 9]. Unlike Problem
2, the code uses an arrow function expression without curly braces, removing the
need for an explicit return statement. Instead, the arrow function implicitly 
returns the expression's value: the square of the given argument. 
*/


// Problem 4
['ant', 'bear', 'caterpillar'].pop().length;

/*
The return value for the code above is 11. The .pop() method removes the last
element of an array and returns that value. Thus, the length of the string 
literal 'caterpillar' is returned. 
*/


// Problem 5
[1, 2, 3].every(num => {
  return num = num * 2;
});

/*
The code above has a return value of true. The .every() method determines if 
all elements of an array return true in its callback function. In this case, 
the callback function's returns the reassignment of each argument to its value 
doubled. The truthiness value for such expression is true for every value of the
array above.    
*/


// Problem 6
let arr = [1, 2, 3, 4, 5];
console.log(arr.fill(1, 1, 5));
console.log(arr);

/*
The .fill() method is a destructive method that changes all elements to a given
value from a start index (default 0) to an end index (default array.length). In 
the code above, the .fill() method changes the elements of the "arr" array to 
the number 1, from index [1, 5). Its return value is [1, 1, 1, 1, 1]. To 
determine if the method is destructive, console.log the return value of the 
method, and then the "arr" array (as shown above). 
*/


// Problem 7
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
The return value of the .map() method above is [undefined, 'bear']. The .map()
method transforms each element of an array to the return value of its callback
function. In this example, the callback function only has a return statement
if the element's length is greater than 3. The argument "ant" does not pass this
condition and the callback function returns undefined. 
*/


// Problem 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};

flintstones.forEach((element, index) => obj[element] = index);
console.log(obj);


/*
First, an empty object literal is initialized to the "obj" variable. Then, 
the .forEach() method is used to iterate over each element of the "flintstones"
array. Its callback function utilizes two arguments, the element and the current
index. For each element, the element is used as a key name for the "obj" object, 
along with its index as the key's value. 
*/


// Problem 9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageList = Object.values(ages);
let sum = ageList.reduce((sum, element) => sum + element);
console.log(sum);

/*
First, the Object.values() method is used to retrieve all the values of the 
"ages" object into an array. The .reduce() method is then used on the array to 
find the sum of the all the values. 
*/


// Problem 10
ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

ageList = Object.values(ages);
let lowestAge = Math.min(...ageList);

/*
First, the Object.values() method is used to retrieve all the values of the 
"ages" object into an array. Then, the Math.min() method is used to determine 
the smallest value of its given arguments. The spread operator, ..., is used to 
pass all the values of the age list into the argument. 
*/


// Problem 11
let statement = "The Flintstones Rock";
let chars = statement.replaceAll(' ', '').split('');
let uniqueChars = {};

chars.forEach(char => {
  uniqueChars[char]? uniqueChars[char]++: uniqueChars[char] = 1;
});

console.log(uniqueChars);

/*
The code above first splits every non-whitespace character of the statement into
an array. An object to contain every unique character, along with its frequency,
is also initialized. Then, using each character as a key name for the object, 
its value is accessed in the object. If the value does not exist (returning 
undefined) the key is initialized with the value of 1. If the key's value is 1 
or higher (meaning it was already created), its value is increased by 1. 

Note, the expression uniqueChars[char] is used as the condition for the 
ternary operator. If the accessed key has a truthy value (in our case, any 
positive value), the key exists. If the accessed key does not have a value,
returning undefined, the key does not exist. 
*/