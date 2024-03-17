//  +++++++++++++++++array+++++++++++++++++++
const myArr = [1,2,3,4,5,];
// console.log(myArr);
// console.log(myArr[2]);
const Heros = ['Elon','jhon', 'dov'];
// console.log(Heros[0]);
const myArr2 = new Array (1,2,3,4);
// console.log("data of myArr2",myArr2[3]);
// ++++++++++++++++ array methods ++++++++++++++++++++++
 myArr.push(6, 7, 8, 9);
//  push method are using to add new data to previous array
//  myArr.pop();
//  pop method are used to remove last data from array 
//  myArr.unshift(2,10)
//  unshift are used to add a data in the beginging of array
//  myArr.shift()
//  shift are used to remove the first data from array
// console.log(myArr.includes(9));
// console.log("finding index of my arr", myArr.indexOf(6));
//  console.log("data added after push", myArr);
const newArray2 = myArr.join();
console.log( typeof newArray2);