//const tinderUser= new Object() //singleton obj.
const tinderUser={
    email:'soham@gmail.com'
}
tinderUser.id='123abc'
tinderUser.name='Soham'
tinderUser.isloggedIn=false

console.log(tinderUser)

//Chaining of objs
const newUser={
    email:'soma@ugr.com',
    fullname:{
        userName:{
            firstName:'Soham',
            lastName:'Patil'
        },
        fatherName:{
            firstName:'Ajit',
            lastName:'Patil',
        }
    }
}

console.log(newUser.fullname.fatherName);

//Merging 2 or more objects
const obj1={a:2,b:3}
const obj2={b:2,d:3} // if similar key occurs the value is updated
const obj3={f:2,e:3}
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

//using spread operator
const obj5= {...obj1,...obj2,...obj3}

// we can get array of keys, values, pairs(entries)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//to check if object has any property
console.log(tinderUser.hasOwnProperty('isloggedIn'))