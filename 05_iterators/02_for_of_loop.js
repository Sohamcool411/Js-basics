//for of , iterates over the value iterable object.

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

//MAPS
/* maps are similar to objects which hold key value pairs.
there is no repeatition of keys in maps.
if same key accurs the value gets updated*/

const map = new Map()
map.set('In','India')
map.set('Uk','United kingdom')
map.set('Uk','United kingdo')
console.log(map);

//for of loop on map
for (const [key,value] of map) {
    console.log(key , value);
}

//for of loop does not work on objects
const newObj= {
    1:'one',
    2:'two'
}

for (const [key,vale] of newObj) {
    console.log(key,vale);
} // error: newObj is not iterable.


// alt method to do so.
for (const [key,value] of Object.entries(newObj)) {
    console.log(key,value);
}

