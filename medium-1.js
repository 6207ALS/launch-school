/*
Answers for JS101 - Lesson 3, Practice Problems: Medium 1
*/

// Q1
for (let i = 0; i < 10; i++) {
  console.log(' '.repeat(i) + 'The Flintstones Rock!');
}

/*
A for-loop is used to loop 10 times, for each iteration logging the 
concatenation of the (' ' times the number of iterations) and the flintstones
string.  
*/


// Q2
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription = munstersDescription.split('');

for (let i = 0; i < munstersDescription.length; i++) {
  if (/[A-Z]/.test(munstersDescription[i])) {
    munstersDescription[i] = munstersDescription[i].toLowerCase();
  } else if (/[a-z]/.test(munstersDescription[i])) {
    munstersDescription[i] = munstersDescription[i].toUpperCase();
  }
}

munstersDescription = munstersDescription.join('');
console.log(munstersDescription);

/*
The string is first split character-by-character into an array using the 
.split() method. A for-loop then iterates over each character of the array.
If the character is uppercased, the character is converted to lowercase. If the
character is lowercased, the character is converted to uppercase.
*/


// Q3
function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor != 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } 

  return factors;
}

console.log(factors(5));
console.log(factors(0));

/*
The solution would be to use a while-loop instead of a do-while loop. The 
purpose of "number % divisor === 0" is to determine if the remainder of the 
number can be evenly divided by the divisor. If it is, the divisor is a factor
of the number. 
*/


// Q4
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);

  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }

  return buffer;
}

let buffer = [1, 2, 3, 4, 5];
addToRollingBuffer1(buffer, 5, 6);
console.log(buffer);

buffer = [1, 2, 3, 4, 5];
addToRollingBuffer2(buffer, 5, 6);
console.log(buffer);

/*
Although both functions have return the same results, there is a key difference 
between the two functions. addToRollingBuffer1 mutates the provided buffer while
addToRollingBuffer2 does not. In addToRollingBuffer2, the function uses variable
shadowing. It declares: buffer = buffer.push(newElement). The "buffer" variable 
is a variable within its own scope (the function's scope). Thus, whatever 
changes are made to the "buffer" variable does not apply to the original buffer. 
*/


// Q5
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/*
The two lines above will log 0.8999999 and false, respectively. Floating point
numbers on JavaScript (and many other languages) lack precision. Thus, using
mathematical operations on them can yield unexpected results. Because
0.3 + 0.6 unexpectedly yields 0.899999, 0.3 + 0.6 === 0.9 will evaluate to 
false.    
*/


// Q6
let nanArray = [NaN];
console.log(nanArray[0] === NaN);
console.log(Number.isNaN(nanArray[0]));

/*
Because NaN is a Number type, comparing NaN to NaN will evaluate to false. 
The Number.isNaN() method should be used to determine if a given value is a NaN
value.  
*/


// Q7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*
The code above logs 34 to the console. The "answer" variable is initialized
to the value 42. The "newAnswer" variable is initialized to the value 50. 
The console.log expression logs (42 - 8) to the console.
*/


// Q8 
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);

/*
The family's data did get ransacked. The "messWithDemographics" function 
first uses the Object.values() method, which returns the values of the given 
object in an array. However, the values of the "munsters" object are objects.
Thus, references (pointers) to the object's values are passed into the returned 
array. The .forEach() method then iterates over each reference, changing the 
values of the original object.  
*/


// Q9
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

/*
The code above will log "paper" to the console. The most nested function must
be evaluated first, rps("rock", "paper") returns paper. The second, 
rps("rock", "scissors"), returns rock. The two returned values are then used
as arguments another rps function. rps(paper, rock) returns paper, which is 
again used as an argument for the final rps function. rps(paper, rock) returns 
paper. 
*/


// Q10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

/*
The function invocation above returns "no". The foo() function is first 
evaluated. Regardless of its argument, the return value is the string "yes". 
"yes" is then passed into the bar() function. If the string is "no", the string
"yes" is returned. If it is not, "no" is returned. 
*/