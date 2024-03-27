// +++++++++ object ++++++++++++++
// object literals 
const mySymbol = Symbol("key1")
const JsUser = {
    name : "shehzad",
    [mySymbol] : 'mykey1',
    'fullName': "shehzad shah",
    age : 28,
    location: "Pakistan",
    email: "devshehzad249@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"]
}
// console.log(JsUser.name)
// console.log(JsUser['age'])
// console.log(JsUser.fullName)
// console.log(typeof JsUser[mySymbol])
JsUser.email = "shehzad@chagpt.com"
// console.log("updated user email in jsUser object", JsUser['email'])
// freeze are used for that the object will be never update
// Object.freeze(JsUser)
JsUser.name = 'jhon'
console.log(JsUser)
JsUser.greeting = function(){
    console.log('hello from greeting')
}
JsUser.greetingTwo = function(){
    console.log(`helo js user from greeting2 ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())