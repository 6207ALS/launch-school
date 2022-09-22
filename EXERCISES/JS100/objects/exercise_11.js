// A simple exercise to change a value nested deep inside an object

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

// there are multiple ways of accessing the same value, altering
// between dot notation and square bracket notation. 

obj.bar[3].xyz = 606;
obj['bar'][3]['xyz'] = 606;   
console.log(obj.bar[3].xyz);