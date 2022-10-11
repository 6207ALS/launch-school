let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
The code above will loge NaN to the console. It should be noted that, unlike
function blocks, object literals are not blocks. They do not create an inner
scope. Thus, when "this" is accessed in the "person" object, "this" references
the global object. The expression on line 4 returns NaN, as operations on
undefined return NaN.
*/