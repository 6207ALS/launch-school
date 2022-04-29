/*
Answers for JS101 - Lesson 3, Practice Problems: Easy 1
*/


// Q1
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/*
The code will not produce an error. JavaScript will consider indices 3-5 as 
empty slots and initialize the value 5 to index 6. Line 8 has a return value
of 'undefined' as a side effect of line 7 was creating empty slots at indices
3-5.
*/


// Q2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
function lastCharIsExclamation (string) {
  return string[string.length - 1] === '!';
}

lastCharIsExclamation(str1);
lastCharIsExclamation(str2);

/*
We can access individual characters of a string through their indices, much like
arrays. The index of the last character of a string is the string's length - 1. 
The lastCharIsExclamation function returns the boolean value when comparing the 
last character of a string to the exclamation character. 

OR we can simply used the .endsWith("!") method on the string. The method
determines whether a string ends with the characters of a specified string.
*/


// Q3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty("Spot");

/*
We can use the .hasOwnProperty("Spot") method to determine if the object has a
property named "Spot". 
*/


// Q4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newString = munstersDescription[0].toUpperCase() + 
  munstersDescription.slice(1).toLowerCase(); // => The munsters are creepy and spooky.

/*
We can concatenate the first letter of the string (capitalized) with the 
remainder of the string (in lower case).
*/


// Q5
console.log(false == '0');
console.log(false === '0');

/*
Line 62 will log true to the console and line 63 will log false. With a 
non-strict equality operator (==), it will first attempt to coerce the boolean 
into a Number value (0). The '0' character is also converted into 0, and when 
compared, results to true. Line 63, on the other hand, uses a strict equality 
operator which does not coerce any values and compares for same type and value. 
*/


// Q6
ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

/*
The Object.assign() method copies all enumerable own properties from one or more
source objects to a target object, and returns the target object. We can assign
all the properties of the additionalAges object to the ages object. 
*/


// Q7
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes('Dino');
str2.includes('Dino');

/*
We can use the String.prototype.includes() method to determine if the string 
contains the given string argument. If the string contains the substring 'Dino'
(case sensitive), true is returned. 
*/


// Q8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

/*
We can use the .push() method to add the string "Dino" to the end of the 
flintstones array. 
*/


// Q9
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

/*
We can add multiple arguments to our .push() method to add multiple items. 
*/


// Q10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let noHouse = advice.slice(0, advice.indexOf('house'));

/*
We can slice the string from the index 0 to index of where 'house' is (the 
string 'house' is not included) 
*/