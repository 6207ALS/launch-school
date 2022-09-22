const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// The code will throw "TypeError: Assignment to constant variable" when it reaches
// line 6. Line 6 attempts to reassign a value to a constant variable, which is not
// allowed. 