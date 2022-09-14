/*
Answers for JS120 - Lesson 3, Practice Problems: Constructors and Prototypes
*/

// Q1
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

/*
The code above will output NaN twice to the console. As shown on lines
18 and 19, a Rectangle object's 'area' and 'perimeter' properties are assigned 
the expressions 'RECTANGLE.area()' and 'RECTANGLE.perimeter()', respectively.
When the two methods are invoked, their contexts are binded to the RECTANGLE 
object, which has neither the 'width' nor 'height' properties. Because 
mathematical operations are used on undefined, the value NaN is returned for 
both methods.
*/


// Q2
this.area = RECTANGLE.area.call(this);
this.perimeter = RECTANGLE.perimeter.call(this);

/*
As shown above, a possible solution to question 1 would be to invoke the 
RECTANGLE's 'area' and 'perimeter' methods with the 'call' method. By using
the 'call' method with 'this' as the argument, we can invoke the methods with 
the execution context binded to the Rectangle constructor, where its 'width'
and 'height' properties are defined. 
*/


// Q3
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  const PI = Math.PI;
  return PI * (this.radius ** 2);
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

/*
In the code above, the 'Circle' constructor creates an instance of a 'Circle' 
object and sets its 'radius' property value to the argument. All instances of 
the 'Circle' object inherit the 'area' method, which determines the "circle's"
area, from its prototype object. 
*/


// Q4
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*
The code above will log true to the console. First on line 81, an instance of 
the 'Ninja' object is created and assigned to the 'ninja' variable. The 'new' 
operator is programmed to assign the instance's [[Prototype]] property to 
reference the 'Ninja' constructor's 'prototype' object. On lines 83 to 85, the 
method 'swingSword' is defined on the 'Ninja' constructor's 'prototype' object. 
Finally, the return value of the expression 'ninja.swingSword()' is logged to 
the console. Because the method 'swingSword' is defined prior to invoking it,
the 'ninja' object can safely invoke it from Ninja's prototype object.
*/


// Q5
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());

/*
The code above will log an error to the console. When variable 'ninja' is 
assigned an instance of Ninja on line 108, the instance's [[Prototype]] 
property references the object Ninja.prototype references. Then, on line 108, 
the Ninja constructor's prototype property is reassigned to reference an 
entirely new object with the swingSword method. At this point, "ninja's" 
[[Prototype]] property still references the initial prototype object. The 
initial prototype object does not have the swingSword method and, thus, returns 
error when it is invoked on line 114. 
*/


// Q6
function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

/*
The Ninja constructor's prototype object is given a 'swung' method that 
reassigns the calling object's 'swung' property value to true. It then returns 
the calling object.
*/


// Q7
ninjaA = undefined;
{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

ninjaB = new ninjaA.constructor();
console.log(ninjaA.constructor === ninjaB.constructor) // => true

/*
In the code above, variable 'ninjaB' is assigned the expression 
'new ninjaA.constructor().' The property ninjaA.constructor references the 
constructor function 'Ninja' itself. Thus, the expression ninjA.constructor(),
preceded with the 'new' keyword, invokes the constructor function and returns
a new instance of the Ninja object.
*/


// Q8
function User(first, last) {
  if (this instanceof User) {
    this.name = `${this.first} ${this.last}`;
  } else {
    return new User(first, last);
  }
}

let userName = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(userName);     // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

/*
In the code above, the User constructor function first checks if an instance was
created by the constructor function. If the instance's constructor property is
the User function, the 'new' keyword was used to create it. If no instance was 
created and  the function was simply invocated, it invokes the User constructor 
function again, preceded with the 'new' keyword.
*/