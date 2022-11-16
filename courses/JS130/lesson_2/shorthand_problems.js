/*
(JS130) Lesson 2 - Practice Problems: Shorthand Notation
*/


// Q1
{
  function foo(bar, qux, baz) {
    return {
      bar,
      baz,
      qux,
    };
  }
  
  function foo(bar, qux, baz) {
    return {
      bar: bar,
      qux: qux,
      baz: baz,
    }
  }
}

/*
The code above demonstrates object property initialization through two different
notations.

The first 'foo' function uses concise property initialization. The
object properties are named 'bar', 'baz', and 'qux', and assigned the values of
the arguments for parameters 'bar', 'baz', and 'qux'.

The second 'foo' function achieves the same results: an object is returned with
properties named 'bar', 'baz', and 'qux'. Their values are the arguments for
parameters 'bar', 'baz', and 'qux'.
*/


// Q2
{
  function foo() {
    return {
      bar() {
        console.log("bar");
      },
      qux(arg1) {
        console.log("qux");
        console.log(arg1);
      },
      baz(arg1, arg2) {
        console.log("baz");
        console.log(arg1);
        console.log(arg2);
      },
    };
  }
  
  function foo() {
    return {
      bar: function() {
        console.log("bar");
      },
      qux: function(arg1) {
        console.log("qux");
        console.log(arg1);
      },
      baz: function(arg1, arg2) {
        console.log("baz");
        console.log(arg1);
        console.log(arg2);
      },
    };
  }
}

/*
Similar to Question 1, the functions declared above return objects with
properties defined in two different manners.

The first 'foo' function returns an object with properties defined through
concise method syntax. The properties are declared as methods by adding
parentheses after the property name.

The second 'foo' function achieves the same output, but uses classic JavaScript
syntax for defining object methods. The properties are assigned a reference to
a function expression, which then contains the method's body.
*/


// Q3
{
  function foo(one, two, three) {
    return {
      bar: one,
      baz: two,
      qux: three,
    };
  }
  
  let { baz, qux, bar } = foo(1, 2, 3);
  
  let obj = foo(1, 2, 3);
  bar = obj.bar;
  baz = obj.baz;
  qux = obj.qux;  
}

/*
The code above demonstrates assigning variables the properties of an object
in two different ways.

The first method utilizes object destructuring to assign multiple variables a 
value from an object. Take note that the variable are assigned the value that
corresponds to their name in the object. For instance, the 'baz' variable is
assigned the value of the 'baz' property in the returned object.

The second method achieves the same results. The returned object of the 'foo'
function is assigned to the 'obj' variable. Each variable is then assigned their
own value from the object.
*/


// Q4
{
  function foo([ one, , three ]) {
    return [
      three,
      5,
      one,
    ];
  }
  
  function foo(arr) {
    return [
      arr[2],
      5,
      arr[0],
    ]
  }
  
  
  let array = [1, 2, 3];
  let result = foo(array);
  
  [ bar, qux, baz ] = result;
}


/*
The code above demonstrates accessing values of an object argument through two
different ways.

The first method utilizes 'array destructuring' to assign multiple variables 
elements from an array in one expression. The value each variable is assigned
to is determined by their index in the destructured expression. For instance, 
the 'bar' variable is in the 0th index, so it is assigned the element at the 0th 
index of the array.

The second method achieves the same results. It uses classic JavaScript syntax
to individually assign the variables their own value from the array.
*/


// Q5
{
  function product(num1, num2, num3) {
    return num1 * num2 * num3;
  }
  
  array = [2, 3, 5];
  result = product(...array);
  result = product(array[0], array[1], array[2]);
}

/*
The code demonstrates passing in multiple elements of an array as arguments to
a function in two different ways.

The first method uses the spread operator to pass in the elements of the 'array'
array. The spread syntax will separate the elements of an array into individual
items. This effectively achieves the same results as the second method.

The second method simply passes multiple arguments for the 'product' function.
Each argument accesses different indices of the array and its value is passed.
*/


// Q6
{
  function product(...numbers) {
    return numbers.reduce((total, number) => total * number);
  }
  
  function product() {
    let numbers = Array.from(arguments);
    return numbers.reduce((total, number) => total * number);
  }
  
  console.log(result = product(2, 3, 4, 5));
}

/*
The code above demonstrates two different ways of managing arguments of a
function.

The first approach utilizes a rest operator so that the 'product' function
can accept an arbitrary number of arguments and place them into an array. The 
'reduce' method is called on the array to return the sum of the argument values.

The second approach utilizes JavaScript's built-in 'arguments' operator, which
is an 'array-like' object that contains the function's arguments. The
'array-like' object is then converted to an array using the 'Array.from'
method. The converted array is then used to determine the sum of the argument
values.
*/


// Q7
{
  const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
  console.log(foo);         // 42
  console.log(rest);        // { bar: 3.1415, qux: 'abc' }
}

/*
The code above utilizes object destructuring and the rest operator to assign
the resulting values to constants. The first line utilizes an object destructure
expression to assign the 'foo' constant the value of the 'foo' property.
The 'rest' constant is given the rest operator (...) to indicate that it will
be assigned the rest of the properties in its own object.
*/


// Q8
{
  const obj = {
    first: "I am the first",
    second: "I am the second",
    third: [1, 2, 3],
    rest: { a: 'a', b: 'b' },
  };
  
  ({ first, second, ...rest } = obj);
  
  {
    let first = obj.first;
    let second = obj.second;
    let rest = {
      third: obj.third,
      rest: obj.rest,
    }
  }
}

/*
The code above demonstrates two different ways to assign properties of an
object to multiple variables.

The first method utilizes object destructuring to assign properties of the
'obj' object to various variables under one expression. The 'first' variables
is assigned the value of the 'obj' object's 'first' property. The 'second' 
variables is assigned the value of the 'obj' object's 'second' property. The 
'rest' variable is assigned the remaining properties of the 'obj' object.

The second method achieves the same results through classic JavaScript syntax.
Every variable is individually declared and initialized a property from the
'obj' object. The 'rest' variable is assigned the unused properties contained
in their own object literal.
*/


// Q9
{
  function qux() {
    let animalType = "cat";
    let age = 9;
    let colors = ["black", "white"];
    return {
      type: animalType,
      age,
      colors,
    }
  }
  
  let { type, age, colors } = qux();
  console.log(type);    // cat
  console.log(age);     // 9
  console.log(colors);  // [ 'black', 'white' ]
}


// Q10
{
  function foo(first, second, third, fourth, last) {
    return {
      first,
      last,
      middle: [second, third, fourth].sort(),
    };
  }
  
  let arr = ["apple", "bee", "cat", "dog", "elephant"];
  let {first, last, middle} = foo(...arr);
  console.log(first, last, middle);
}