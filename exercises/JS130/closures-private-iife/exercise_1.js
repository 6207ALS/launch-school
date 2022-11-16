function bind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  }
}

/*
The function above emulates the basic behavior of the built-in 'bind' method.
The 'bind' function accepts two arguments: 1) the function to bind and 2) the
context object. It then returns a function that invokes the function whose
context is hard-bound to the provided context.

The rest operator is used for the parameter of the returned function. In turn,
the function can accept an indefinite number of arguments and the parameter
is assigned an array of the arguments. The parameter is then used within the
'apply' method to provide an array of arguments.
*/