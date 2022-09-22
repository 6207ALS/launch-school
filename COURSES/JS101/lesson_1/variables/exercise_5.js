let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// The code above will output 'bar' because the 'foo' variable within the curly braces
// has block scope, it cannot be referenced outside of its scope. Thus, when console.log
// references foo, it will reference the 'foo' variable within its own scope. 