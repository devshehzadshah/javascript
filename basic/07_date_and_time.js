let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
let myCreatedDate = new Date (2023, 0 ,23)
// let myCreatedDate = new Date ("01-14-2024");
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday : 'long'
})