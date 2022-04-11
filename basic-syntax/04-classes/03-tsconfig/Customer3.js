var Customer3 = /** @class */ (function () {
    function Customer3(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer3;
}());
// lets create an instance
var myCustomer3 = new Customer3("Azhar Uddin", "Azad");
myCustomer3.firstName = "ASL";
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
