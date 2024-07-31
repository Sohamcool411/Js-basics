"use strict" //treat all Js code as newer version
//alert(3+3) //we are using node js not browser


//DATATYPES

//Primitve (uses stack, call by value)

/*
Number=> 2^53
bigint
string
boolean
null=>Standalone value
undefined 
symbol=>unique
*/

//Symbol

let id=Symbol('123')
let id2=Symbol('123')
console.log(id==id2)


//Non primitve (uses heap , call by reference)

/*
Arrays
objects 
functions
*/


//ARRAY

const heroes=['soham','shiv','naman']

//OBJECTS

let myObj={
    name:'Soham',
    age:22
}

//Functions

let myFunc = function(){
    console.log('hello world')
}