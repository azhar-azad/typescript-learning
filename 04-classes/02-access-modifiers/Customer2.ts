class Customer2 {

  private _firstName: string;
  private _lastName: string;


  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

// lets create an instance
let myCustomer2 = new Customer2("Azhar Uddin", "Azad");

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);