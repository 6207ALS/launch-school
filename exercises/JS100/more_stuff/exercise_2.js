/*
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
*/

/*
The error message tells us that an error occurred when running the exercise2.js
file. At line 4 of the file, the program could not console.log the greeting 
variable. The stack trace tells us that the error was a ReferenceError and
the greeting variable is not defined. Line 7 tells us that the error occurred
when calling the hello function, which is located at character 15 of line
4 within the function's body. Line 8 tells us the function was called at 
character 1 of line 13.   
*/