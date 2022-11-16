function bind(func, context, ...firstArgs) {
  return function(...secondArgs) {
    return func.apply(context, [...firstArgs, ...secondArgs]);
  }
}

/*
The function above is a refactored version of the 'bind' function from the
previous exercise. The 'bind' function now accepts predetermined arguments to
be passed in the returned function. The predetermined arguments are then
concatenated with the arguments passed at execution to create a single array
of arguments. 
It utilizes partial function application, applying some of the function's 
arguments (firstArgs) and the remaining arguments (secondArgs) when invoking the 
returned function.
*/