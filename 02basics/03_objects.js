// +++++++++ object ++++++++++++++
// object literals 
const mySymbol = Symbol("key1")
const JsUser = {
    name : "shehzad",
    [mySymbol] : 'key1',
    'fullName': "shehzad shah",
    age : 28,
    location: "Pakistan",
    email: "devshehzad249@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"]
}
console.log(JsUser.name)
console.log(JsUser['age'])
console.log(JsUser.fullName)
console.log(typeof JsUser[mySymbol])