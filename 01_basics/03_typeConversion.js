let score='33abc'
console.log(typeof score)


// for type conversion we use first letter capital e.g Number
let strToNum=Number(score)
console.log(strToNum)
console.log(typeof strToNum)

/*

'33'=> 33
'33abc'=>NaN , Not a Number
true=>1 ; false=>0
null=>0
undefined =>NaN

*/

let isLoggedIn=0
let toBoolean=Boolean(isLoggedIn)
console.log(toBoolean)
console.log(typeof toBoolean)

/*

0 =>false
any other integer =>true
'' => false
'1' =>true

*/



// *********************Operations**********************

let value = 3
let negValue= -value


console.log('1'+2+2)
console.log(false + 1+2+'2' +2 +true)
console.log(false + 1+2+'2' +(2 +true)) 

//wherever the string occurs all the further types will be treated as string
// it is always a good practice to use ()