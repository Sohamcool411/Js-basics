console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true

// In js the equality check (==) and comparison operators (>,<,<=,>=) work differently.
// Comparison operators convert string to number while comparing
// Comparison operators convert null to 0 but equality check does not.

/* === */
// === checks the data type too conversion does not occur

console.log('2'==2)// true
console.log('2'===2)// false
