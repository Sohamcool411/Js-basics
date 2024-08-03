//for in loop ,iterates over the keys of object.
const myObj={
    1:'one',
    2:'two',
    5:'five'
}

for (const key in myObj) {
    console.log(key,myObj[key]);
}

//for each loop
const coding=['js','ruby','java','python']

coding.forEach(function (item){
    console.log(item);
})

//pass already defined function.
function printme(item) {
    console.log(item);
}

coding.forEach(printme)

//pass arrow fn
coding.forEach((val,index,arr)=>{
    console.log(val,index,arr);
})


//for each on array of objs
const myCoding=[
    {
        languageName:'Javascript',
        extension:'js'
    },
    {
        languageName:'C++',
        extension:'cpp'
    },
    {
        languageName:'Python',
        extension:'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

