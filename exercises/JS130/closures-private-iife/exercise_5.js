let rlSync = require('readline-sync');

let Account = (function() {
    let email;
    let password;
    let firstName;
    let lastName;

    function anonymize() {
      return nameGenerator();
    }

    function nameGenerator() {
      let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      let name = "";

      for (let i = 0; i < 16; i++) {
        name += characters[Math.floor(Math.random() * characters.length)];    
      }

      return name;
    }

    function isValidPassword(inputPassword) {
      return inputPassword === password;
    };

    return {
      init(inputEmail, inputPassword, inputFirstName, inputLastName) {
        Account = 
        email = inputEmail;
        password = inputPassword;
        firstName = inputFirstName;
        lastName = inputLastName;
        this.displayName = anonymize();
        return this;
      },

      
      reanonymize(inputPassword) {
        if (isValidPassword(inputPassword)) {
          this.displayName = anonymize();
          return true;
        } else {
          return 'Invalid Password';
        }
      },

      resetPassword(inputPassword, newPassword) {
        if (isValidPassword(inputPassword)) {
          password = newPassword;
          return true;
        } else {
          return "Invalid Password";
        }
      },
    
      firstName(inputPassword) {
        if (isValidPassword(inputPassword)) {
          return firstName;
        } else {
          return 'Invalid Password';
        }
      },
    
      lastName(inputPassword) {
        if (isValidPassword(inputPassword)) {
          return lastName;
        } else {
          return 'Invalid Password';
        }
      },
    
      email(inputPassword) {
        if (isValidPassword(inputPassword)) {
          return email;
        } else {
          return 'Invalid Password';
        }
      },
    };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function

console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // logs true
console.log(displayName === fooBar.displayName);   // logs false


/*
The "Account" object above is created through an IIFE, an instantly invoked 
function expression. The IIFE returns an object with the necessary methods, but 
also creates a private, inner scope. Sensitive information such as the account's 
credentials are then placed in the private scope. In turn, only the returned 
object has access to such data; the private data cannot be accessed elsewhere. 
*/