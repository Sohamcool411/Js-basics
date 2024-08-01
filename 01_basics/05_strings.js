const name='Soham' // creates a string primitive
const age=22

console.log(name+age)// not a good way to write

console.log(`my name is ${name} with age ${age}`)
// here we use back ticks and this uses string interpolation

console.log(name.indexOf('o'))

let str3= new String ('Soham')
// this creates a string object

console.log(typeof name=== typeof str3); //false
const newstr=name.substring(0,4)//cannot give neg vaalues
const str4=name.slice(-1,0)//can give neg values
console.log(newstr);
console.log(str4);

const str1='    soham     '
console.log(str1.trim());// removes spaces

const url='https://soham.com/soham%20patil'
console.log(url.replace('%20','-'))

console.log(url.includes('soham',20));
console.log(url.split('/'));