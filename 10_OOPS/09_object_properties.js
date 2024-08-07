const pi =Object.getOwnPropertyDescriptor(Math,'PI')
console.log(pi);
// this fn tells you about the hidden properties of an object.
// this values are soo hard coded in cpp with soo many checks that even if you want you cant change them.

const newObj={
    name:'soham',
    age:22
}

console.log(Object.getOwnPropertyDescriptor(newObj,'name'));
// since this is written by us we have the control to change the values of this property descripters.

Object.defineProperty(newObj,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(newObj,'name'));

for (let [key,value] of Object.entries(newObj)) {
    console.log(key,value); 
    //name wont be printed as we have turned its enumerable property to false , hence our loop cant iterate over it.
}