// default parameters antes es6
function newFunction(name, age, country) {
    var name = name || 'Erick';
    var age = age || 27;
    var country = country || 'CO';
    console.log(name, age, country);
}

// default parameters in es6
function newFunction2(name = 'Erick', age = 27, country='CO') {
    console.log(name, age, country);
}
newFunction2();

let hello = 'Hello';
let world = 'World';
// string concat antes es6
let epicPhrase = hello + ' ' + world;
// string concat es6
let epicPhrase2 = `${hello} ${world} !!!`;
console.log(epicPhrase2);

// multiline string antes es6
let lorem = 'Labore consectetur do commodo do occaecat nostrud cupidatat tempor ut consequat elit culpa esse aute. \n'
    + 'Dolore amet ea sint minim aute et tempor incididunt culpa incididunt nisi deserunt officia.';
    
console.log(lorem);

// multiline string es6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem2);


// destructuracion antes es6
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'CO',
};

console.log(person.name, person.age, person.country);

// destructuracion es6
let {name, age, country} = person;
console.log(name, age, country);

// spread operation es6
let team1 = ['oscar', 'julia', 'ricardo'];
let team2 = ['valeria', 'julia', 'camila'];
let education = [...team1, ...team2];

console.log(education);

// let const y var

{
    var globalVar = "Global Var"; // scope global
}

{
    let globalLet = "global let"; // scope local
    console.log(globalLet);
}

console.log(globalVar);


const a = 'b'; // no se puede modificar es scope local;
a = 'a'; // genera error



let _name = 'oscar';
let age = 27;

const obj = {name: _name, age: age}; // creacion de objetos antes es6
const obj2 = {_name, age}; // creacion de objetos es6

// arrow function

const names = [
    {name: 'oscar', age: 32},
    {name: 'alejandra', age: 25}
];

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));


// promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Upps');
        }
    });
}

helloPromise()
    .then(response => console.log('response', response))
    .catch(error => console.log('error', error));


// classes
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 3));

// import modules

import {hello2} from './module';
hello2();



// generadores
function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
