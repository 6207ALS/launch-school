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
In the provided example code, the "greet" method attempts to access the
execution context's "morning", "afternoon", "evening", and "name" properties.
However, the "this" keyword must be used as the handle to access such 
properties. Calling the property names alone will not provide the expected
output.

In the code above, the "greet" method accesses the execution context's
"morning", "afternoon", "evening", and "name" properties with "this."
'this' refers to the execution context (helloVictor object) and is used as the
handle to access the object's properties.
*/