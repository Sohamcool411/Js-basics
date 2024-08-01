// DATES 
let myDate = new Date() // current date n time
console.log(myDate.toLocaleString())

//months and days start with 0 in js
let createDate= new Date(2023,0,14,15,3)
console.log(createDate.toLocaleString());

//let newDate= new Date('2023-01-14')
let newDate= new Date('01-14-2023')
console.log(newDate.toLocaleString())

//TIMESTAMP
// timestamp gives miliseconds vallue from 1 jan 1970 upto the date provided

let myTimestamp= Date.now() //current time stamp
console.log(myTimestamp)

//to get timestam of any desired date:
console.log(createDate.getTime())

//convert to seconds
console.log(Math.floor(createDate.getTime()/1000))

// to get any specific field
console.log(myDate.getDay());
console.log(myDate.getFullYear());

// imp of localeString() we can define a complete object

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric"
}))

