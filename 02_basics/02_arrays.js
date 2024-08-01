const arr1=[1,2,3]
const arr2=[4,5,6]


arr1.push(arr2)// acts like append , the push operation returns the new length of array.
console.log(arr1)

const arr3=arr1.concat(arr2)// acts like extend , concat returns a new array
console.log(arr3);

const newArr=[...arr1,...arr2,...arr3]
console.log(newArr);
/* ... is known as spread operator which spreads all the elements in the array
up to 1 depth and then all the elements can be seen in single array. */

const flatArr=newArr.flat(Infinity)//spreads all the elements upto given depth.
console.log(flatArr);

//to check if a given input is an arr or not we can use isArray.
console.log(Array.isArray('soham')) //false

//to convert this into array
console.log(Array.from('soham'))
console.log(Array.from({name: 'soham'})) // cant make a raay of this.

let a =100
let b =200
console.log(Array.of(a,b))
