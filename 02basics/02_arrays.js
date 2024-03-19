const javascript_heros = ["hitesh", "Mosh", "netninja"]
const react_heros = ["mosh", "Dr anand", "jhon"]

javascript_heros.push(react_heros);
console.log(javascript_heros)
console.log(javascript_heros[2][2])
// const allheros = javascript_heros.concat(react_heros);
console.log(allheros);
// speard operators  we can use spread operators instead of concatination
const allheros = [...javascript_heros, ...react_heros]
console.log(allheros);
const another_array = [0,1,2,3,4, [5,6,7], 8, 9, [10,11,[12,13,15]]]
// console.log(another_array)
const real_anotherarray = another_array.flat(Infinity);
console.log(real_anotherarray)
console.log(Array.isArray("shehzad"))
console.log(Array.from("shehzad"))
console.log(Array.from({ Name : "shehzad"}))
var score1 = 100 
var score2 = 200
var score3 = 300
var score4 = "shehzad"
console.log(Array.of(score1,score2,score3,score4))