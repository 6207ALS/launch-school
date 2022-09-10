/*
Answers for JS120 - Lesson 2, Practice Problems: Dealing with Context Loss
*/

// Q1
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/*
The code above will log "undefined undefined is a undefined" to the console. 
When the function argument "turk.getDescription" is invoked as "func()" on line
17, the function's implicit context becomes the global object. Thus, any 
references to the 'this' keyword such as lines 11 and 12 will refer to the
global object, not the object the function is defined in. 
*/


// Q2
turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

/*
The code above outputs "Christopher Turk is a Surgeon." By passing an execution 
context as an argument, the 'logReturnVal' function can invoke its function 
argument along with its context. In this case, we invoke the 
'turk.getDescription' method with a context of the 'turk' object.
*/


// Q3
function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription);

/*
In the code above, the 'getDescription' method from the 'turk' object is 
assigned to the 'getTurkDescription' variable, along with the bind method. 
The bind method permanently sets the method's execution context to its argument 
(the 'turk' object). Now, whenever the 'getTurkDescription' variable is invoked,
the 'getDescription' method is invoked with its execution context as the 
'turk' object.
*/


// Q4
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

/*
The code above will not log the expected output. When using the forEach method
on line 82, the callback function is invoked as a standalone function, which
sets its context to the global object. Thus, any use of the 'this' keyword in 
the callback function will refer to the global object, rather than the 
'TESgames' object. 
*/


// Q5
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

/*
Unlike the previous question, the code above assigns the context of the 
'TESgames' object to a variable called 'self' on line 104. When the 'listGames'
method invokes the forEach method on line 105, the callback function refers to 
the 'self' variable instead of 'this.' Because 'self' refers to the 'TESgames' 
object, the callback function can refer to its properties. 
*/


// Q6
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();

/*
In contrast to question 5, the code above provides a second argument to the 
forEach method on line 127. The forEach method allows an optional 'thisArg' 
argument, which sets the execution context for its callback function. In this
case, 'this', which refers to the 'TESgames' object, is passed as the 'thisArg' 
argument.
*/


// Q7
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

/*
In contrast to questions 5 and 6, an arrow function was used as the callback 
function for the forEach method on line 149. Unlike nested functions, arrow 
functions set their context to their outer scope's context. In this case, the
outer scope of the callback function is the listGames method, which has a 
context of the 'TESgames' object. Thus, any use of the 'this' keyword in the 
callback function references the 'TESgames' object.
*/


// Q8
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

/*
After the execution of the code above, the value of foo.a will be 0. Though
foo.incrementA is invoked multiple times, the value of foo.a will not change.
This is because of how the incrementA method is implemented. The method defines
a nested function 'increment' and invokes it to increment the value of foo.a.
However, becase the 'increment' function is invoked standalone, its execution
context implicitly becomes the global object. Thus, the 'increment' function
does nothing to the 'foo' object's 'a' property.
*/


// Q9
foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    let incrementFooA = increment.bind(foo);
    incrementFooA();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a)

/*
On line 202 of the code above, the 'incrementFooA' variable is assigned the 
'increment' function, along with the bind method. The bind method is passed the
'foo' object to set the returned function's execution context to the 'foo' 
object. Thus, whenever 'incrementA' is invoked the 'incrementFooA' function
is invoked, which directly increments the 'a' property value of object 'foo.'
*/