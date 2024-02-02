// # Primitive Data Types  ( call by values )
// there are 7 primitive data types | String | Numbers | Bolean | Null | Undefined | Symbol: make it a unique | Biginit 

const score = 30
const scoreValue = 100.30
const isLogedIn = false
const outTemprature = null
let userEmail
// the userEmail is undefiend 

const id = Symbol("123");
const userId = Symbol("123")
// console.log(id === userId)
const bitNumber = 2323423426757456234n

// Refrence (Non Premitive)
// Array , objects, Function
const heros = ["Quaid Azam", "ImranKhan", "Zulfiqar Ali bhutto", "BachaKhan"];
let myObj = {
    name: "shehzad",
    age: 28,
    qulaification: " BS(CS)",
};
const muFunction = function(){
    console.log("hello world from function");
};
console.log(typeof muFunction);
