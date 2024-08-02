//This keywords tells about current coontext.

const user={
    username:'Soham',
    age:22,
    msg: function(){
        console.log(`hello, ${this.username}`);
        console.log(this);
    }
}
user.msg()
user.username='Hitesh'
user.msg()

//when you run this in global environment it gives empty,becoz there in no context in global
//but in browser it will show context because window will be running in global context.
console.log(this);

//this only works in object but not in function.
function foo(){
    let user='Soham'
    console.log(this.username);
    
}
foo()

//ARROW FN
const newFn = () => {
    console.log('hello');
    return 0
    
}
console.log(newFn())


//Implicit return arrow fn.
const add1= (a,b) => (a+b)

console.log(add1(3,4));

//to return an object wrap it in ()
const re_obj= () =>({name:'sss'})
console.log(re_obj());

