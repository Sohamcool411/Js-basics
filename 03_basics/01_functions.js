function add(a=0,b=0){
    let result=a+b
    return result
}
const result=add(3,4)
console.log(result);

// ... is rest operator used to take multiple values as arguements and stores it in an array.
function addCarteValues(val1,val2,...valn){
    return valn
}
console.log(addCarteValues(400,200,500,3000,22,44,9));


//passing objct to func
const user={
    name:'soham',
    age:22
}

function handleObject(Obj){
    console.log(`user's name is ${Obj.name} and age is ${Obj.age}`);
}

handleObject(user)
handleObject({
    name:'Gitu',
    age:34
})

//passing array to func
const arr=[1,2,3,4,5]
function returnsecondValue(arr){
    return arr[1]
}
console.log(returnsecondValue(arr))



// Ways to declare function

add1(1) //executes properly 
function add1(num){
    return num+1
}

add2(1) // gives error , cant call func before initialization
const add2=function(num){
    return num+2
}