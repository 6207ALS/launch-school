function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

/*
The provided code example defines a createGreeter factory function with a 
'greet' method in the returned object. The 'greet' method attempts to access the
object's 'morning', 'afternoon', and 'evening' properties, but without the 
'this' keyword. The 'this' keyword is required to the refer to the execution
context, that is, the object used to call the 'greet' method. In the code above,
the 'greet' method is updated to make use of the 'this' keyword so that it can
access the intended properties.
*/