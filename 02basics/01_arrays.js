//  +++++++++++++++++array+++++++++++++++++++
// const myArr = [1,2,3,4,5,];
// console.log(myArr);
// console.log(myArr[2]);
// const Heros = ['Elon','jhon', 'dov'];
// console.log(Heros[0]);
// const myArr2 = new Array (1,2,3,4);
// console.log("data of myArr2",myArr2[3]);
// ++++++++++++++++ array methods ++++++++++++++++++++++
//  myArr.push(6, 7, 8, 9);
//  push method are using to add new data to previous array
//  myArr.pop();
//  pop method are used to remove last data from array 
//  myArr.unshift(2,10)
//  unshift are used to add a data in the beginging of array
//  myArr.shift()
//  shift are used to remove the first data from array
// console.log(myArr.includes(9));
// console.log("finding index of my arr", myArr.indexOf(6));
//  console.log("data added after push", typeof myArr);
// const newArray2 = myArr.join();
// console.log( typeof newArray2);
// +++++++++++++++++++++ slice and splice ++++++++++++++++++++++++++++++++++++
// const myArr = [0,1,2,3,4,5]
// console.log("A ",  myArr);
// const myn1 = myArr.slice(1,3);
// console.log("data in myn1 ",myn1);
// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3);
// console.log('orignal array ',myn1)
// console.log("data in myn2 ", myn2);
// var users = ['ted', 'tem', 'ton', 'sam', 'sor', 'sod']
// console.log(users.slice(1,4));

// users.slice(1,3, "hi");
// console.log(new1);
const myArray = [0,1,2,3,4,5]
// console.log(myArray);
// myArray.push(6);
// myArray.pop();
// myArray.push(7,8)
// myArray.pop();
// myArray.unshift(9);
// myArray.shift();
// console.log(myArray.includes(3))
// console.log(myArray.indexOf(2))
// const mynewArray = myArray.join()
// console.log( typeof myArray)
// console.log( typeof mynewArray);
console.log("A ", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ", myArray)
const myn2 = myArray.splice(1,3);
console.log("C ", myArray)
console.log(myn2);