/*
The minilang function implements a miniature stack-and-register-based 
programming language that has the following operations: PUSH, ADD, SUB, MULT, 
DIV, REMAINDER, POP, and PRINT. The operations interact with the register's and
stack's values.

The function iterates over each word in the given string argument. If
the word is a number, the number is declared the register's value. If
the word matches any of the operations (case sensitive), the appropriate 
operation is executed. For instance, the "ADD" operation pops the last element
of the stack and adds the value to the register. 
*/

let stack = [];
let register = 0;

function minilang(string) {
  string = string.split(" ");

  for (operation of string) {
    if (!isNaN(Number(operation))) {
      n(Number(operation));
    } else {
      switch (operation) {
        case "PUSH":
          push(register);
          break;
        case "ADD":
          add(register);
          break;
        case "SUB":
          sub(register);
          break;
        case "MULT":
          mult(register);
          break;
        case "DIV":
          div(register);
          break;
        case "REMAINDER":
          remainder(register);
          break;
        case "POP":
          pop();
          break;
        case "PRINT":
          print();
          break;
      }
    }
  }
}

function n (num) {
  register = num;
}
function push (num) {
  stack.push(num);
  register = num;
}
function add () {
  register += stack.pop();
}
function sub () {
  register -= stack.pop();
}
function mult () {
  register *= stack.pop();
}
function div () {
  register = parseInt(register / stack.pop());
}
function remainder () {
  register = parseInt(register % stack.pop());
}
function pop () {
  register = stack.pop();
}
function print () {
  console.log(register);
}

// test cases
minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)