class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

/*
The code shown above will log "ByeBye" and "HelloHello" to the console.
On line 15, the 'thing' variable is declared and initialized the reference to
a newly created instance of the Something class. In turn, the 'thing' instance
is assigned a 'data' property and inherits the 'dupData' method from the class's
prototype object.
  On line 16, the 'Something' class's static method, 'dupData', is invoked. It
should be noted that the 'dupData' method is invoked from the Something class
itself, not an instance of the Something class. It invokes the static method 
defined with the 'static' modifier on line 10. As stated on line 11, the
string 'ByeBye' is logged to the console.
  On 17, the 'dupData' method is invoked from the 'thing' instance using the
method invocation syntax. In turn, the 'thing' object is set as implicit
execution context for the 'dupData' method. However, this time, the 'dupData'
defined on line 6 is invoked. This method is placed in the Something class's
prototype object, where instances of the Something class can inherit methods
from. The method returns the sum of two of the execution context's 'data'
property. Or, the string 'HelloHello' is returned. 
  This code demonstrates the differences of static and instance properties,
specifically the syntax for defining them in classes and accessing/invoking
them.
*/