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
// the abc will be overide with khan as show in line 26 , if we did not pass argument to the function the username abc will be assign from parameter in function
function userLogin(username = 'abc'){
    if(!username){
        console.log('please enter username')
        return
    }
    return `${username} just loggedIn`
}
// console.log(userLogin('khan')) 

// to take multiple parameters we use rest operators ...num1 
function calculateCartPrice(...num1){
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400));
const user = {
  userName: 'jhon',
  userEmail: 'jhon@gmail.com'
}
function handleObject(anyObject){
  console.log(`userName is ${anyObject.userName} user email will be ${anyObject.userEmail}`)
}
// handleObject(user);
const mynewArray = [100, 200, 300, 400, 500]
function returnanArray(myArray){
  return myArray[3]
}
console.log(returnanArray(mynewArray))