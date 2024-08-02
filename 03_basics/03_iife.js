//Immediately invoked function expression (IIFE).
(function foo(){
    console.log('hello');
})(); //named IIFE

/* NOTE: always use semicolon after iife. */

(()=>{
    console.log(`hello 2`);
})(); //normal IIFE.


//we can pass the arguements and parameters just like normal fn.
((name)=>{
    console.log(`hello ${name}`);
})('soham');