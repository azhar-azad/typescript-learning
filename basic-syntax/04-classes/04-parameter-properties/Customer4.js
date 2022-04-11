var Customer4 = /** @class */ (function () {
    function Customer4(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer4.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer4.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer4;
}());
// lets create an instance
var myCustomer4 = new Customer4("Azhar Uddin", "Azad");
console.log(myCustomer4.firstName);
console.log(myCustomer4.lastName);
