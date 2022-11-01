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
The code above will log "ByeBye" and "HelloHello" to the console. On line 15,
the "thing" variable is declared and initialized to an instance of the
Something class. On line 16, the Something class's "dupData" static method is
invoked. That is, the Something class is directly accessed and the "dupData"
method that is defined on the class itself is invoked. This static method logs
"ByeBye" to the console.

Then, on line 17, the "thing" instance's "dupData" method is invoked. That is,
the instance method "dupData", which is typically accessed and invoked from an
instance of the Something class, is invoked. This instance method logs 
"HelloHello" to the console. This is achieved by concatenating together two of 
the instance's "data" property.
*/