// Logs a string to the console
console.log('Hello World.');
// Declare a variable and print it
let name = 'esther';
console.log(name);

// Demonstrates variable reassignment
let interest_rate = 0.3;
interest_rate = 1;
console.log(interest_rate);

// Declare a constant and print it
const price = 2;
console.log(price);

// Define a simple object with properties
let age = 21;

let person = {
    name_object: 'jess' ,
    age_object: 19
};

console.log(person);

// Update object properties using dot and bracket notation
person.name_object = 'lessia';
console.log(person.name_object);

person ['name_object'] = 'bebadoobee';
console.log(person.name_object);

// Create and modify an array, then log its length
let selectedColour = ['red', 'blue'];
selectedColour[2] = 'green';
console.log(selectedColour.length);

// A function that greets a person
function greet(name, lastname){
    console.log("hello "+ name + "" + lastname);
}

// A function that returns the square of a number

function square(number){
    return number * number;
}

// Call the square function and print the result
let number = square(2);
console.log(number);

// Call the greet function with two names
greet("john", "smith");
greet("mary", "smith");