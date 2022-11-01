/*
Answers for JS120 - Lesson 3, Practice Problems: Factory Functions
*/

// Q1

/*
The two disadvantages of working with factory functions is excessive system
memory and inability to determine the object's "type." When creating multiple
objects with factory functions, every object has its own copy of states and 
properties. It is redundant and demands a heavy-load of system memory. In 
addition, there is no way of determining "which" factory function created the 
object. It lacks the option to inspect the 'type' of the object.  
*/


// Q2
function makeObj() {
  return {
    propA: 10,
    propB: 20
  }
}

/*
The code above utilizes object-literal syntax to return an object. Rather than
initializing an empty object literal, the function above returns an object 
literal populated with the necessary properties.
*/


// Q3
function createInvoice(services = {}) {
  if (!services.hasOwnProperty("phone")) services.phone = 3000;
  if (!services.hasOwnProperty("internet")) services.internet = 5500;

  return {
    phone: services.phone,
    internet: services.internet,
    total() {
      return this.phone + this.internet;
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000


// Q4
function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,

    total() {
      return this.amount || (this.phone + this.internet);
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000


// Q5
function createInvoice(services = {}) {

  return {
    payments: [],
    phone: services.phone || 3000,
    internet: services.internet || 5500,

    total() {
      return this.phone + this.internet;
    },

    addPayment(service) {
      this.payments.push(service);
    },
    
    addPayments(services) {
      services.forEach(this.addPayment, this); 
    },

    paymentTotal() {
      return this.payments.reduce((sum, payment) => payment.total() + sum, 0);
    },

    amountDue() {
      return this.total() - this.paymentTotal(); 
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0