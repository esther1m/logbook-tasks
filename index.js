console.log('Hello World.');

let name = 'esther';
console.log(name);

let interest_rate = 0.3;
interest_rate = 1;
console.log(interest_rate);

const price = 2;
console.log(price);

let age = 21;

let person = {
    name_object: 'jess' ,
    age_object: 19
};

console.log(person);

person.name_object = 'lessia';
console.log(person.name_object);

person ['name_object'] = 'bebadoobee';
console.log(person.name_object);

let selectedColour = ['red', 'blue'];
selectedColour[2] = 'green';
console.log(selectedColour.length);

function greet(name, lastname){
    console.log("hello "+ name + lastname);
}

greet("john");
greet("mary");