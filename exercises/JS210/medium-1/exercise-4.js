// JS210 Exercises | Medium 1
// Exercise 4 - Stack Machine Interpretation

/*
PROBLEM:
Write a function that implements a miniature stack-and-register-based 
programming language

Input: String
Output: Logged Message(s) to Console

Rules:
	- A stack-and-register programming language is a language that uses a stack 
		of values.
	- A stack may be implemented as an Array that uses two Array methods: 
		Array.prototype.push and Array.prototype.pop.
	- Each operation in the language operates on a register, which can be thought 
		of as the CURRENT VALUE.
		- The register is not part of the stack.

	- The language has the following commands (also called operations or tokens):
		N : Place a value, N, in the register. Do not modify the stack.
		PUSH : Push the register value onto the stack. Leave the value in the 
					 register.
		ADD : Pop a value from the stack and add it to the register value, storing 
					the result in the register.
		SUB : Pop a value from the stack and subtract it from the register value, 
					storing the result in the register.
		MULT : Pop a value from the stack and multiply it by the register value, 
					 storing the result in the register.
		DIV : Pop a value from the stack and divide the register value by the popped 
					stack value, storing the integer result back in the register.
		REMAINDER : Pop a value from the stack and divide the register value by the 
								popped stack value, storing the integer remainder of the 
								division back in the register.
		POP : Remove the topmost item from the stack and place it in the register.
		PRINT : Print the register value.

	- All operations are integer operations (which is only important with DIV and 
		REMAINDER).
	- Programs will be supplied to your language function via a string argument. 
	- Assume that all arguments are valid programs — i.e., they will not do 
		anything like trying to pop a non-existent value from the stack, and they 
		will not contain any unknown tokens.
	- Initialize the stack and register to the values [] and 0, respectively.
	- Individual operations (tokens) in the argument are separated by single
		whitespaces.
	- Order of operations is the order in which they appear in the string argument
	- Every function call has their own session of a stack and register
		- In other words, they are completely independent from each other.
	- Assume every operation will be in uppercase letters

TEST CASES:
minilang('PRINT'); 
// 0

stack: []
register: 0


minilang('5 PUSH 3 MULT PRINT');
// 15

stack: []
register: 15


minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

stack: []
register: 8

minilang('5 PUSH POP PRINT');
// 5

stack: []
register: 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

stack: []
register: 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
stack: []
register: 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

stack: []
register: 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

stack: []
register: 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


REQUIREMENTS:
	- initialize the stack and register with [] and 0, respectively
	- implement the functions for each operation 
	- retrieve individual operations in program by splitting string (" " as delimiter)
		- execute each operation in the order that they appear

DATA STRUCTURE:
	- ARRAY -> Stack, Array.prototype.push and Array.prototype.pop.

ALGORITHM:
	LET STACK = [];
	LET REGISTER = 0

	LET OPERATIONS = SPLIT STRING ARG BY WHITESPACE INTO ARRAY
	FOR EACH OPERATION IN OPERATIONS
		IF OPERATION IS A NUMBER
			ASSIGN VALUE TO REGISTER
		ELSE IF OPERATION IS PUSH
			PUSH() REGISTER VALUE TO STACK
		ELSE IF OPERATION IS ADD
			LET VALUE = POP() LAST ELEMENT IN STACK
			CALCULATE SUM OF VALUE AND REGISTER, REASSIGN RESULT TO REGISTER
		ELSE IF OPERATION IS SUB
			LET VALUE = POP() LAST ELEMENT IN STACK
			CALCULATE DIFFERENCE OF VALUE AND REGISTER, REASSIGN RESULT TO REGISTER
		ELSE IF OPERATION IS MULT
			LET VALUE = POP() LAST ELEMENT IN STACK
			CALCULATE PRODUCT OF VALUE AND REGISTER, REASSIGN RESULT TO REGISTER
		ELSE IF OPERATION IS DIV
			LET VALUE = POP() LAST ELEMENT IN STACK
			CALCULATE QUOTIENT OF REGISTER / VALUE, REASSIGN INTEGER VALUE OF RESULT 
			TO REGISTER
		ELSE IF OPERATION IS REMAINDER
			LET VALUE = POP() LAST ELEMENT IN STACK
			CALCULATE REMAINDER OF REGISTER / VALUE, REASSIGN RESULT TO REGISTER
		ELSE IF OPERATION IS POP
			LET VALUE = POP() LAST ELEMENT IN STACK
			REASSING VALUE TO REGISTER
		ELSE
			PRINT REGISTER VALUE
*/

function minilang(program) {
	let stack = [];
	let register = 0;

	let operations = program.split(" ");
	for (let operation of operations) {
		if (!Number.isNaN(Number(operation))) {
			register = Number(operation);
		} else if (operation === "PUSH") {
			stack.push(register);
		} else if (operation === "PRINT") {
			console.log(register);
		} else {
			let value = stack.pop();
			if (operation === "ADD") {
				register += value;
			} else if (operation === "SUB") {
				register -= value;
			} else if (operation === "MULT") {
				register *= value;
			} else if (operation === "DIV") {
				let quotient = register / value;
				register = Math.floor(quotient);
			} else if (operation === "REMAINDER") {
				register %= value;
			} else {
				register = value;
			}
		}
	}
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)