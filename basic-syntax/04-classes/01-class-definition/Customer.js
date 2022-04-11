var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// lets create an instance
var myCustomer = new Customer("Azhar Uddin", "Azad");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
