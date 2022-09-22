/* 
The following code will log "hi" and "hello" to the console. When the two 
different data types, object and string, are passed into the function, they 
are passed-by-reference and passed-by-value, respectively. Passed-by-reference
refers to passing the "pointer" of the argument, meaning whatever is changed
in the function, will affect the object permanently. Passed-by-value, on the
other hand, refers to passing the value of the argument, meaning the passed 
argument will not be affected. The function simply creates a "clone" of the 
argument during the function's existence. 
*/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);