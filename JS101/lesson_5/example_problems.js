/*
Answers for JS101 - Lesson 4, Example Problems
*/


// Example 1
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));

/*
The .forEach() method iterates over each subarray of the array it's called on.
For each subarray, a callback function is invoked: console.log the first element
in the subarray. The return value for the .forEach() method is always undefined.
*/


// Example 2
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

/*
The .map() method, like the .forEach() method, iterates over each subarray of
the array it's called on. For each subarray, a callback function is invoked:
console.log the first element of the subarray. However, the purpose of the 
.map() method is to transform each subarray into the return value of the 
callback function. Because the return value of the callback function, in this 
example, is undefined, every subarray is transformed into undefined. The .map()
method's return value is the new array with the transformed values: 
[undefined, undefined].
*/


// Example 3
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
The .map() method, as explained previously, iterates over each element of the
array and transforms it into the return value of the callback function. In the
code above, the callback function returns the first element of the subarray.
The .map() method returns a new array with the values [1, 3].
*/


// Example 4
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

/*
The code above will iterate over each subarray of the array through the 
.forEach() method. For each subarray, the .map() method is called, which again,
iterates over each element of the subarray. If the element's value is greater
than 5, it will console.log() the number. Thus, the code above will 
console.log() the values 18, 7, and 12. However, the myArr variable will be
assigned undefined. Regardless of what occurs within the .forEach() method, the
method will always return a value of undefined. 
*/


// Example 5
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/*
The first invocation of the .map() method iterates over each subarray of the 
outer array. Then, for each subarray, a second .map() method is called. The 
second .map() returns a new array with the elements' values doubled. For 
instance, the subarray [1, 2] is transformed into [2, 4]. The overall return 
value for the code above is [[2, 4], [6, 8]]/ 
*/


// Example 6
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

/*
To select only objects where every key matches the first letter of the value,
a .filter() method must first be called on the array. For each object, a series
of methods are called. First, the keys of the objects are retrieved as an array.
The .every() method is called on the array, which checks if every key is the 
same as its value's first letter. If all keys return true, the .filter() method
adds the object to the returned array. 
*/


// Example 7
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});

// [[27], ['apple']]

/*
The .map() method first iterates over each subarray of the array it's called on. 
Each subarray is transformed into the return value of the .filter() method. The
.filter() method is called on the subarray. If an element is a number and 
greater than 13, the element is added to the returned array. If the element is
not a number, but has a length less than 6, it is also added to the returned 
array. The only elements that pass such criterion are the elements 27 and 
'cantaloupe', each within their respective subarray. 
*/


// Example 8
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]

/*
The .map() method returns a new array with two undefined elements. Though it 
may seem like many values are being transformed, the two subarrays (second 
level) end up as undefined. Within the .map() method's callback function, its 
return value is the return value of a .forEach() method. The .forEach() method 
will always return undefined. 
*/


// Example 9
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

// => [[[2, 3], [4, 5]], [6, 7]]

/*
The first .map() invocation iterates over each element of the outer most array.
It again uses .map() on each element (subarrays). For each element of the 
subarray, it checks if its data type is 'number' or anything else. If it is
a number, its value in the returned array is incremented by one. If the element
is another subarray, the .map() method is used once more to increment each of 
the subarray's elements by 1. Ultimately, all number values of the nested arrays
are increased by 1. 
*/