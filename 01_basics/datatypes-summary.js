// Primitive 
/*
7 Types :
String 
Number
Boolearn
null
undefined
Symbol
BigInt
*/

const score =100
const scoreValue = 100.3

const isLoggediIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 359527978584544444n

// console.log(typeof bigNumber);


// Non-Primitive (Reference)
/*
Array
Objects
Functions
*/

const heros = ["ram", "shyam", "mohan", "radha"]


let myObj = {
    name: "hithsh",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);