/*
Answers for JS101 - Lesson 5, Practice Problems
*/


// Problem 1
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));

/*
The .sort() method can be used to sort an array by descending numeric order by 
supplying a compare function. The compare function above takes two elements, A 
and B, converts them to numbers, and finds the difference. If the difference of 
element B and element A is positive (meaning B > A), element B is sorted before 
element A. If the difference is negative (meaning B < A), element A is sorted 
before element B. If the difference is 0, the order is kept the same. 
*/


// Problem 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a["published"]) - Number(b["published"]));

/*
To sort objects according to year of publication, from ascending order, the 
.sort() method can be used. The .sort() method takes two elements for its 
compare function: two objects within the books array. It then accesses each of
the objects' "published" property to retrieve the publish year. The difference 
of the publish years is then used to determine which object is sorted before the 
other. 
*/


// Problem 3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

arr1[2][1][3];
arr2[1]["third"][0];
arr3[2]["third"][0][0];
obj1['b'][1];
Object.keys(obj2["third"])[0];

/*
The objects above contain nested objects/array as elements. The letter 'g' can 
be accessed from each of the objects above through a series of indexing/property 
access. 
*/


// Problem 4
arr1 = [1, [2, 3], 4];

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

obj1 = { first: [1, 2, [3]] };

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
arr2[2] = 4;
obj1["first"][2][0] = 4;
obj2['a']['a'][2] = 4;

/*
Like problem 3, each object's values can be accessed through a series of 
indexing/property access. Once accessed, they can also be reassigned to another
value. 
*/


// Problem 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let listOfValues = Object.values(munsters)
let listOfMaleValues = listOfValues.filter(obj => obj["gender"] === 'male');
let sumOfMaleAges = listOfMaleValues.reduce((acc, mun) => acc + mun["age"], 0);

/*
An array of the values of the munsters object is first initialized.
Using the .filter() method, an array of the male members of the family is 
initialized. Finally, the .reduce() method is used on the list of males to 
find the sum of their ages. 
*/


// Problem 6
munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (member in munsters) {
  let name = member[0].toUpperCase() + member.slice(1);
  let age = munsters[member]["age"];
  let gender = munsters[member]["gender"];
  let message = `${name} is a ${age}-year-old ${gender}.`;

  console.log(message);
}

/*
A for-in loop is used to iterate over each key of the munsters object. Using
the key, the name, age, and gender are accessed and used to construct a 
string interpolation variable. The string variable is then logged to the 
console.
*/


// Problem 7
let a = 2;
let b = [5, 8];
arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

/*
The final values of 'a' and 'b' should be 2 and [3, 8], respectively. The 'arr'
array is first intialized with the value [2, [5, 8]]. The first element is
increased by 2. The second element's (subarray) first element is decreased by 2. 
*/


// Problem 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
  arr.forEach(string => {
    string.split('').forEach(char => {
      if (/[aeiou]/i.test(char)) console.log(char);
    });
  });
});

/*
The values of the "obj" object are first retrieved as an array through the 
Object.values() method. Then, the .forEach() method is used to iterate over each
array. Another .forEach() method is used to iterate over each string of the 
array. Another .forEach() method is used to iterate over the characters of the 
string. Each character is determined if it is a vowel. If it is, the character 
is logged to the console.
*/


// Problem 9
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let stringArr = JSON.stringify(arr);
let newArr = JSON.parse(stringArr);

newArr.map(subArr => {
  if (typeof(subArr[0]) === 'string') {
    subArr.sort();
  } else {
    subArr.sort((a, b) => a - b);
  }
});

newArr;

/*
A deep copy of the "arr" array is created using the JSON.stringify() and 
JSON.parse() methods. The .map() method is then used on the new array. The type
of elements in the subarray is determined by checking the data type of its first
element. If the elements are strings, the .sort() method can be used without
any compare function. If the elements are not strings, it is assumed they are 
numbers and a .sort() method with a compare function is used. The compare 
function finds the difference of its arguments: element A and element B. If the 
difference is positive, element B is sorted before element A. If the difference 
is negative, element A is sorted before element B. 
*/


// Problem 10
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

stringArr = JSON.stringify(arr);
newArr = JSON.parse(stringArr);

newArr.map(subArr => {
  if (typeof(subArr[0]) === 'string') {
    subArr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  } else {
    subArr.sort((a, b) => b - a);
  }
});

newArr;

/*
A deep copy of the "arr" array is created using the JSON.stringify() and 
JSON.parse() methods. The .map() method is then used on the new array. The type
of elements in the subarray is determined by checking the data type of its first
element. If the elements are strings, a .sort() method with a compare function
is used. The compare function finds the difference between the unicode values of
the strings. Strings with higher unicode values are sorted before those with 
lower unicode values. If the array contains number values, the difference of 
the numbers are used to determine sort order instead. 
*/


// Problem 11
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
stringArr = JSON.stringify(arr);
newArr = JSON.parse(stringArr);

newArr.map(obj => {
  Object.keys(obj).forEach(key => obj[key]++);
});

newArr;

/*
A deep copy of the "arr" array is created using the JSON.stringify() and 
JSON.parse() methods. The .map() method is then used on the new array. For each 
object, an array of the object's keys are retrieved. A .forEach() method is used
on the list of keys to access each value of the object. Each value is 
incremented by 1. 
*/


// Problem 12 
arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subArr => subArr.filter(value => value % 3 === 0));
// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]

/*
The .map() method is used to return a new array with values that meet the 
requirements. For each subarray, a .filter() method is used to return a new
array with only values that are multiples of 3. 
*/


// Problem 13 
arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arrA, arrB) => {
  let sumOfOdds = arr => {
    return arr.reduce((acc, value) => {
      return value % 2 === 1? acc + value: acc;
    });
  };

  let arrASum = sumOfOdds(arrA);
  let arrBSum = sumOfOdds(arrB);

  return arrASum - arrBSum;
});

arr;

/*
First, a .sort() method with a compare function is called on the array. The 
compare function calculates two values: the sum of odd numbers in subarray A and
subarray B. To calculate the sum, the .reduce() method is used. The .reduce() 
method iterates over each element of the subarray and checks if the element
is an odd number. If the number is odd, its value + accumulator (current sum) is
returned. If the number is even, just the accumulator value is returned. The 
final iteration is the sum of all odd numbers in the subarray. After calculating
both sums, their difference is calculated to determine which subarray is sorted
before the other. 
*/


// Problem 14
obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

arr = [];

for (food in obj) {
  if (obj[food]["type"] === 'fruit') {
    let colorsList = obj[food]["colors"].slice();

    for (index in colorsList) {
      let color = colorsList[index];
      colorsList[index] = color[0].toUpperCase() + color.slice(1);
    }

    arr.push(colorsList);
  } else {
    arr.push(obj[food]["size"].toUpperCase());
  }
}

arr;

/*
An array to contain the return values is first initialized. Then, each key-value
pair of the "obj" object is accessed. If the value's type property is "fruit", 
its colors property's value is added to the returned array (properly formatted). 
If the value's type is "vegetable", the size property's value is added instead
(properly formatted). 
*/


// Problem 15
arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  return Object.values(obj).every(array => {
    return array.every(element => element % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]

/*
The .filter() method is used to remove objects where any of its values is not 
even. To determine if all values are even, every value of the object is 
retrieved in an array. Multiple .every() methods are called to determine if 
every element of every value (subarray) is even. If any element is not even, the
entire object is disregarded in the returned array. 
*/


// Problem 16
arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
obj = {};

arr.forEach(subArr => obj[subArr[0]] = subArr[1]);
// => { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

/*
First, an empty object is initialized. Then, the .forEach() method is used to 
iterate over each subarray of the "arr" array. Every subarray's first element is
declared as a key property in the object, assigned with the second element in 
the subarray. 
*/


// Problem 17
function createUUID () {
  function xLongHex (x) {
    let string = "";
  
    for (let i = 0; i < x; i++) {
      let char = (Math.floor(Math.random() * 16)).toString(16);
      string += char;   
    }
  
    return string;
  }
  
  let UUID = [];
  let pattern = [8, 4, 4, 4, 12];
  
  for (number of pattern) {
    UUID.push(xLongHex(number));
  }
  
  return UUID.join('-');
}

console.log(createUUID());
console.log(createUUID());
console.log(createUUID());

/*
The createUUID function contains a function (xLongHex()) that creates an x long 
string of hexadecimal characters. A hexadecimal character can be created by 
converting a random number (0 - 15) into a string, using base 16. This allows 
for a random hexadecimal generator (0 - 9 or a - f). The random hexadecimal is 
added to a string literal x number of times. 

The createUUID function then calls the xLongHex() function to generate each 
section of the UUID, some having differing lengths. Every section is pushed to
an array, which later joined by hyphen characters (-) to create the final 
string. 
*/