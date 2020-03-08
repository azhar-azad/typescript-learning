class Customer {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// lets create an instance
let myCustomer = new Customer("Azhar Uddin", "Azad");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);