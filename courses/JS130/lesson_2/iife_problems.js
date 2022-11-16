/*
(JS130) Lesson 2 - Practice Problems: Immediately Invoked Function Expressions
Note: program will not execute as code contains intentional errors.
*/

// Q1
{
  function() {
    console.log("Sometimes, syntax isn't intuitive!");
  }();
}


/*
The code above will result in a syntax error. Immediately invoked function
expressions (IIFE) require function definitions to be wrapped with outer
parentheses (though there are some cases where omitting the parentheses are
acceptable). In this case, a function expression, that occurs at the beginning
of the line, is immediately invoked without the necessary outer parentheses.
*/


// Q2
{
  (function() {
    console.log("Sometimes, syntax isn't intuitive!");
  })();
}

/*
The code above provides a solution to the IIFE demonstrated on Question 1. The
function definition (expression) is now encased within a pair of outer 
parentheses. This is the proper syntax for using immediately invoked function
expressions.
*/


// Q3
{
  var sum = 0;
  sum += 10;
  sum += 31;
  
  let numbers = [1, 7, -3, 3];
  
  function sum(arr) {
    return arr.reduce((sum, number) => {
      sum += number;
      return sum;
    }, 0);
  }
  
  sum += sum(numbers);  // ?
}

{
  let numbers = [1, 7, -3, 3];

  sum += (function(arr) {
    return arr.reduce((sum, number) => sum += number);
  })(numbers);

  console.log(sum);
}

/*
The code above results in an error because of hoisting. Before the program is
executed, all variable declarations such 'sum' and 'numbers' are placed to the
top of the code. However, the 'sum' variable is declared both as a variable
(through the 'var' keyword) and as a function. This leads to silent issues such
as reassigning 'sum' to a number when it needs to be a function. On line 46, the
'sum' variable is invoked as if it were a function, when it is really a number 
value at that point of the code.

We can resolve this issue by using an IFFE as demonstrated within the block on 
line 4. Instead of declaring a 'sum' function (which causes naming conflicts 
with the 'sum' variable), we can define it through an IFFE and immediately
invoke the anonymous function. The returned value is then added to the value of
the 'sum' variable.
*/


// Q4
{
  (function(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  })(7);
}


// Q5
{
  (function foo() {
    console.log('Bar');
  })();
  
  foo() // ?
}

/*
The named function inside the IFFE shown above cannot be accessed in the global
scope. In a way, the parentheses used to encase the function declaration creates
an inner, private scope. Thus, it is not accessible to the outer scope.
*/


// Q6
{
  const bar = (function(start) {
    let prod = start;
    return function (factor) {
      prod *= factor;
      return prod;
    };
  })(2);
  
  result += bar(4);
  result += bar(5);
  console.log(result);
}

/*
The code above was refactored to use an IIFE instead of a standalone function
declaration. This removes the need for a separate function invocation of 'bar'
and we can immediately assign the returned function to a variable.
*/


// Q7
{
  (function recursiveCountDown(num) {
    console.log(num);
  
    if (num !== 0) {
      recursiveCountDown(num - 1);
    }
  })(7);
}

/*
The code above is an alternative to the IFFE used in Question 4 that uses
recursion. Named functions within an IFFE can be called within the body of the
function, which allows for recursive operations.
*/