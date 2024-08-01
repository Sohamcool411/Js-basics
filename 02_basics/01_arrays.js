const myArr = [1,2,3,4,5]
const arr = new Array(1,2,3,4,5,6,7)

console.log(arr[2])

arr.push(8) // adds at end
arr.pop() // removes last element
arr.unshift(1)// adds at the start
arr.shift() // removes 1st element

console.log(arr.includes(9));
console.log(arr.indexOf(4));

const newStr= arr.join('-')
console.log(newStr);


//SLICE , SPLICE
const arr1=[1,2,3,4,5]
console.log('A ',arr1)
const arr2=arr1.slice(1,3)
console.log('B ',arr2);
const arr3=arr1.splice(1,3)
console.log('C ',arr3)
console.log('D ',arr1);

/* slice does the normal slicing not changing the original arr
but splice takes end index too and cuts that portion from original array*/

