// The union type
function padLeft(value: string, padding: string | number): string {
    if (typeof padding === "number") { // for numeric argument, generates spaces
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") { // for a string, uses concatenation
        return padding + value;
    }
    // if the second argument is neither a string nor a number, throws an error
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
// console.log(padLeft("Hello world", true));


// The Custom types

// declaring alias types Foot and Pound
type Foot = number;
type Pound = number;

type Patient = { // declares the Patient type
    name: String; 
    height: Foot; // Uses the type alias Foot
    weight: Pound; // Uses the type alias Pound
}

let patient: Patient = { // create an instance using the object literal notation
    name: 'John Doe',
    height: 5,
    weight: 100
}

type Patient2 = {
    name: String; 
    height: Foot; 
    weight?: Pound; // this property is optional
}

let patient2: Patient2 = {
    name: "John Doe",
    height: 5
}