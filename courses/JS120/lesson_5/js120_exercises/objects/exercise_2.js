let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    
    return this.price - discount;
  },
};

console.log(item.discount(20)); 
console.log(item.discount(50));
console.log(item.discount(25)); 

/*
In terms of calculating the discounted price, the provided code had no issues.
However, the issue was reassigning the object's "price" property to the
discounted price. In turn, the subsequent use of the 'discount' method considers
the discounted price as the original price. We need to retain the original
price.

To resolve this, we simply do not reassign the object's "price" property to the
discounted price. Instead, we simply return the difference of the value and 
the discount amount (as shown on line 9).
*/