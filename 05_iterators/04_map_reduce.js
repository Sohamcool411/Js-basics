//forEach doesnt return anything.
//soo filter is used, returns the elements of array that specify the condition.

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums= myNums.filter((num)=>(num>4))
console.log(newNums);

// const arr=[]
// myNums.forEach((num)=>{
//     if (num>4){
//         arr.push(num);
//     }
// })
// console.log(arr);


//map
const oldNums=myNums.map((num) => num+10)
console.log(oldNums);


//chaining
const nums=myNums.map((num)=>num*10)
                 .map((num)=>num+1)
                 .filter((num)=>num>40)
console.log(nums);
/*here the next map function gets the array already passed through first map fn.*/

