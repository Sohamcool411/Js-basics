const promiseOne = new Promise((resolve,reject)=>{
    // can be used to do an async task
    // DB calls , cryptography , netwrok calls etc
    error=true
    setTimeout(()=>{
        console.log('async 1 complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise 1 resolved');
}) // resolve is connected to then , and reject is connected to catch


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async 2 complete');
        resolve()
    },1000)   
}).then(function(){
    console.log('Promise 2 resolved');
}) // we can directly attach .then() to the promise.


const promiseThree = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        let error=true
        if (!error){
            resolve({user:'soham' , age:22}) //we can also return values in resolve annd reject.
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)

})

promiseThree.then(function(data){ // the value returned by resolve is parameter of this fn.
    // console.log(data.user);
    return data.user
}).then((username)=>{ // value returned from previous then is parameter of this then , this is called chaining of then or then-ing.
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('the promice is either resolved or rejected')
) // finally is always executed


// handling promise using async-await
const promiseFour = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        let error=false
        if (!error){
            resolve({user:'patil' , age:69}) //we can also return values in resolve annd reject.
        }else{
            reject('ERROR : promiceFour has error')
        }
    },1000)

})

// async function consumePromiseFour(){
//     const response = await promiseFour //await waits for the promiseFour to complete.
//     //also promiseFour is an object so you dont apply () after it.
//     console.log(response); // this will give error if error is present.
    
//     //the problem with async- await is that ot cannot directly handle errors.
//     //hence we wrap it in try catch block.
// }

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour()

//async function on fetch
async function getUserData(){
    try {
        const response = await fetch('https://api.github.com/users/Sohamcool411') 
        //fetch is used to get reponse from a promise, await fn is used because it takes time.
        const data =  response.json() // converting to json also takes time , if await is not used we wont get anything in data.
        console.log(data);
        
    } catch (error) {
        console.log('E: ',error);   
    }
}
getUserData()


//using then,catch on fetch (recommended)

const response=fetch('https://api.github.com/users/Sohamcool411')
response.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})