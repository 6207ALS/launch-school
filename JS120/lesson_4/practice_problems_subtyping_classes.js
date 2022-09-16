/*
Answers for JS120 - Lesson 4, Subtyping with Classes
*/

// Q1
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/*
If a 'play' method was defined in the Bingo class, all instances created by the
Bingo class would invoke that method, not the 'play' method defined in the Game
class. As indicated in the code above, objects created by the Bingo class 
inherit methods from both the Bingo class and Game class. However, if a 'play' 
method was defined in the Bingo class, it would 'override' the 'play' method
defined in the Game class. 

Under the hood, JavaScript looks through the prototype chain when a method
is invoked on an object. In the case an instance of Bingo class invokes the
'play' method, it would find the 'play' method in the Bingo class first.
When a subclass redefines/customizes a method that a superclass defines, it is
called "method overriding."
*/


// Q2
class Greeting {
  greet(arg) {
    console.log(arg);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Bye extends Greeting {
  bye() {
    this.greet("Goodbye")
  }
}

let greeting = new Hello();
greeting.hi();

let farewell = new Bye();
farewell.bye();

/*
The code above declares three classes: one superclass and two subclasses that
inherit from the superclass. The two subclasses, Hello and Bye, create instances
that inherit methods from the Greeting class. In particular, the instances
inherit the 'greet' method from the Greeting class, which is called within the
methods defined in the subclasses.
*/