// JS210 Exercises | Debugging
// Exercise 5 - Range

/*
We are assigned the task to implement a range function that returns an array of 
integers beginning and ending with specified start and end numbers. When only a 
single argument is provided, that argument should be used as the ending number 
and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying 
Maximum call stack size exceeded? Can you fix the code, so it runs without error 
and satisfies the requirements?
*/

function range(start, end) {
  const result = [];

	if (end === undefined) return range(0, start);

  for (let element = start; element <= end; element++) {
    result.push(element);
  }

  return result;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));

/*
In the code shown above, the second function declaration of "range" overwrites
the first function declaration. The second function declaration leads to an
infinite call to itself, which results in the error "Maximum call stack size
exceeded."

The solution would be to remove the second function declaration entirely and
refactor the first function declaration. Within the first function declaration,
the "range" constant was renamed to "result" so that the "range" function could
call itself recursively. Then, on line 18, a guard clause was added for function
calls where the "end" argument was not provided. With this guard clause, the
function can handle both calls with and without the "end" argument.
*/