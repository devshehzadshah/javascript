const num = 400; 
console.log(num);
const balance = new Number (100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
const anotherNumber = 23.8966;
console.log(anotherNumber.toFixed(3));
console.log(anotherNumber.toPrecision(1));
const hundered = 1000000 
console.log(hundered.toLocaleString('en-PK'));

// ++++++++++++ maths ++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.63));
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);
const min = 10 ;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)