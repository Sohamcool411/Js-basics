const score=100.94763549

const balance= new Number(400.4502)

console.log(score.toString().length)
console.log(score.toFixed(2)) //rounds off to 2 decimal places
console.log(score.toPrecision(4)) // returns string, rounds of to precise value including digits before decimal
console.log(balance.toLocaleString('en-in')) 
console.log(balance.toExponential()) 


//****************MATHS****************** //

console.log(Math.random()) //gives a random no. betwn 0-1
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.ceil(Math.random()*10));

// when we are given the range to choose random no.

const min=10
const max=20

console.log(Math.ceil(Math.random()*(max-min))+min);
// THIS IS AN IMPORTANT FORMULA


