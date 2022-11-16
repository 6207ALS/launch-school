function sum() {
  values = Array.prototype.slice.call(arguments);

  return values.reduce(function(a, b) {
    return a + b;
  });
}

function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

sum(1, 4, 5, 6); // 16

/*
The refactored sum function (on line 9) utilizes the rest operator within its
parameters. The rest operator allows an indefinite number of arguments to be
passed into the function and stores them in an array called "values".
*/