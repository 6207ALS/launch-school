const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This program will not produce an error. Everything appears to be syntactically correct.
// The first declaration of the FOO constant is valid, and so is the second declaration 
// within the curly braces. Console.log will output the value of the first FOO constant, 
// as it is within its scope. 