const name = "Jhon"
const repo = 50
// console.log(name + repo + "test"); old method not to user for cancatination 
// console.log(`hello my name is ${name} and repo count is ${repo}`);  use string inerpulation insead the above
const gameName = new String('shehzad');
// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));
const newString = gameName.substring(0,4)
// console.log(newString);
const newstring2 = gameName.slice(-5 , 4);
// console.log(newstring2);
const newString3 = "          shehzad"
// console.log(newString3);
// console.log(newString3.trim());
const url = "www.abc.com/shehzad%321"
console.log(url.replace("%", "-"));
console.log(url.includes("%"));
const splitString = new String('shehzad-shah-0011');
console.log(splitString.split('-'));