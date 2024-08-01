//*************Objects*****************//
// objects can be declared with two types literals and constructors
// using constructor object.create , in this singleton in made

//OBJECT LITERALS , singleton is not made

const mySym=Symbol('123')
//to use a symbol as a key in object we need to put it in []

const jsUser={
    name:'Soham',
    age: 22,
    location: 'Jalgaon',
    email:'soham@google.com',
    lastLoginDays:['Mon','Tue','Fri'],
    [mySym]:"123"
}
//all the keys are strings.


//two ways to access objects
console.log(jsUser.name)
console.log(jsUser['name']); //if the key itself is written as string in quotes this is the only way to access it.  
console.log(jsUser[mySym]);

//Creating functions
jsUser.greeting = function(){
    console.log(`hello,${this.name}`) //this acts similar to self in py. to refer to variable in this object.
}
console.log(jsUser.greeting());


//if we dont want anyone to change the values inside object we can use freeze.
Object.freeze(jsUser)
jsUser.email='sakweyvffjhV'
console.log(jsUser)



