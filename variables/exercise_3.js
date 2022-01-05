{
  let foo = 'bar';
}
  
console.log(foo);

// The program will throw "Uncaught Reference Error: foo is not defined". As explained,
// the foo variable within the brackets has block scope. It cannot be referenced outside
// of the block it is in. 