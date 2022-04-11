var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer2;
}());
// lets create an instance
var myCustomer2 = new Customer2("Azhar Uddin", "Azad");
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
