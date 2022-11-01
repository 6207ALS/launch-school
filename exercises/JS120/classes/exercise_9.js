
class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}

Cat.genericGreeting();

/*
In the code above, the Cat class is declared with the 'genericGreeting' static
method. The 'genericGreeting' method is declared as a static method using the
'static' modifier, as demonstrated on line 3. Unlike instance methods, which are
invoked from instances of a class, static methods can be accessed
and invoked from the Cat class itself. In this case, the 'genericGreeting' 
static method is invoked from the Cat class, which logs a message to the 
console.
*/