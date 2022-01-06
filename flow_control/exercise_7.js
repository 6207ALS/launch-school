// The function will return an all-caps version of the argument if the
// argument is longer than 10 characters. If not, it will simply return
// the argument as is.

function capLongString(arg) {
  if (arg.length > 10) {
    return arg.toUpperCase();
  } else {
    return arg;
  }
}

console.log(capLongString('hello world'));
console.log(capLongString('goodbye'));