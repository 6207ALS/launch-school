let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    this.price -= discount;
    
    return this.price;
  },
};

console.log(item.discount(20)) // outputs 40, expected 40
console.log(item.discount(50)) // outputs 20, expected 25 
console.log(item.discount(25)) // outputs 15, expected 37.5

item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    
    return this.price - discount;
  },
}

console.log(item.discount(20)) // outputs 40, expected 40
console.log(item.discount(50)) // outputs 25, expected 25 
console.log(item.discount(25)) // outputs 37.5, expected 37.5

/*
  The first 'item' object above does not output the intended results because of 
property reassignment caused by the 'discount' method. On line 8, the 'item' 
object's 'price' property is reassigned to the discounted price. Meaning, before 
the 'discount' method is invoked a second time, the 'price' property will not be
50 (the intended value). Instead, it will be the reassigned value from the
previous invocation of the 'discount' method. 
  The second 'item' object provides a solution to the bug. Instead of
reassigning the 'price' property to the discounted price, the updated 'discount'
method simply returns the difference of the 'price' property and the calculated
discount amount. This avoids reassignment and outputs the intended results.
*/