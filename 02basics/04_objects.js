const tinderUser = new Object()
// console.log(tinderUser)
tinderUser.id = '002b'
tinderUser.name = 'jhon'
tinderUser.islogedIn = false
console.log(tinderUser)\
const regularUser = {
    email : 'devshehzad',
    fullName:{
        userfullName : {
            firstName : 'shehzad',
            lastName : 'shah'
        }
    }
}
console.log(regularUser.fullName.userfullName.lastName)
const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3:'c',
    4:'d'
}
const obj3 = {
    5:'e',
    6:'f'
}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)
const Users = [
    {
        id: 1,
        email :'user1@gmail.com'
    },
    {
        id: 2,
        email : 'user2@gmail.com'
    },
    {
        id: 3,
        email :'user3@gmail.com'
    }
]
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('name2'))
const course = {
    coursename : 'javascript',
    price : 999,
    instructor : 'Hitesh'
}
// course.instructor
const {coursename, price, instructor:tutor} = course
console.log(price)
console.log(coursename)
console.log(tutor)

// Api : the Api will be in json format : the key is alson in string but we dont write it in "" if we write it like "name" it will be fine
{
    "name": "jhon",
    "class": 10,
    "roll": 20.
}