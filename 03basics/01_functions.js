// normal function 
function sayMyname (){
  console.log('jhon')  
}
// sayMyname()
// function addTwonumbers (number1,  number2){
//     console.log(number1+number2)
// }
function addTwonumbers (number1,  number2){
//   let result = number1 + number2
//   console.log('test result before return')
//   return result
return number1 + number2
  console.log('testing result after return')
}
const result = addTwonumbers(4, 9);
// console.log('Result is :', result)
// the abc will be overide with khan , if we did not pass argument to the function the username abc will be assign from parameter in function
function userLogin(username = 'abc'){
    if(!username){
        console.log('please enter username')
        return
    }
    return `${username} just loggedIn`
}
console.log(userLogin('khan'))