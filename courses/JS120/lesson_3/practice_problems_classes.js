/*
Answers for JS120 - Lesson 3, Practice Problems: Classes
*/

// Q1

/*
First-class values are values that can be passed into functions as arguments,
returned from functions, and assigned to variables. Like primitive values,
objects, and functions, classes are also first-class values. 
*/


// Q2
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

Television.manufacturer();

let tv = new Television();
tv.model();

/*
The 'static' modifier is used to define a class' static methods. Syntactically,
they help differentiate between a class' instance methods and static methods. 
Instance methods and static methods are defined with simplified method 
definitions, except instance method definitions are denoted with the 'static' 
modifier. In the code above, the 'manufacturer' method is a static method and
'model' is an instance method.

Static methods are invoked by accessing directly from the class itself. For
instance, the expression 'Television.manufacturer()' invokes the 'manufacturer'
static method. Whereas, instance methods are invoked from an instance of the
class type. We can create an instance of the Television class and assign its
reference to a variable. From the variable, can we invoke the 'model' method.
*/