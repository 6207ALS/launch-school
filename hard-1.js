/*
Answers for JS101 - Lesson 3, Practice Problems: Hard 1
*/

// Q1
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*
The two functions will not return the same results. The first() function returns
an object because the object literal immediately appears after the return 
statement. The second() function, on the other hand, will return undefined. The 
key difference is that the object literal appears on the line after the return 
statement. Though JavaScript has a feature of assuming semicolons in the 
appropriate places, it can yield unexpected results such as this example. It 
assumed a semicolon right after the return statement in the second() function. 
*/


// Q2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/*
The last line of the code above will output "[1, 2]". The variable numArray
is assigned the reference to the array in the "object" variable. Thus, whatever
changes occur to the array in the "object" variable will show in the "numArray"
variable. 
*/


// Q3

// A
  function messWithVars(one, two, three) {
    one = two;
    two = three;
    three = one;
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);

/*
The code will output: one is: one, two is: two, and three is: three. 
The "messWithVars" function attempts to reassign the given arguments different
values. However, it should be noted that objects like arrays are passed-by-
reference or passed-by-value depending on the action it goes through. In this 
case, reassignment is a non-mutating operation, which means the variables are
passed-by-value. Thus, the objects one, two, and three remain the same
even after being passed as arguments for the messWithVars function.
*/

// B
  function messWithVars(one, two, three) {
    one = ["two"];
    two = ["three"];
    three = ["one"];
  }

  one = ["one"];
  two = ["two"];
  three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);

/*
The output for code snippet B is: one is: one, two is: two, and three is: three.
Much like code snippet A, objects are passed-by-values or passed-by-reference 
depending on the actions it goes through. The messWithVars function uses a 
non-mutating operation: reassigning the variables. A non-mutating operation such
as reassignment will not mutate the passed object.  
*/

// C
  function messWithVars(one, two, three) {
    one.splice(0, 1, "two");
    two.splice(0, 1, "three");
    three.splice(0, 1, "one");
  }

  one = ["one"];
  two = ["two"];
  three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);

/*
The output for code snippet C is: one is: two, two is: three, and three is: one.
Unlike code snippets A and B, snippet C mutates the objects that are passed into
the function with the .splice() method. 
*/


// Q4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) return false; 

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

/*
The function should first check if the array of separated words has four 
elements or not. If it doesn't, return false. In addition, the break statement 
within the while-loop should be a return false statement instead. 
*/