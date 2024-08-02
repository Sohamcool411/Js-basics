//*********falsy values***********//
/*
1. false
2. 0
3. -0
4. 0n (Bigint)
5. ''
6. null
7. undefined
8. NaN
*///all others all truthy values.

console.log(false==0) //true
console.log(false=='') //true
console.log(0=='') //true

//NULLISH Coalescing Operator (??) : null , undefined
let val1
val1= 5 ?? 10
val1= null ?? 10
val1= undefined ?? 10
val1= null ?? 10 ?? 20
console.log(val1);
/* this operator checks if the value is null or undefined ,
and if it is then it assigns the next valid value to the variable.*/

//TERNIARY operator (?)
//condition ? true : false

const price=100
price>80 ? console.log('more than 80') : console.log('less than 80');

