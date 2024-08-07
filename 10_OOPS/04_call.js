function setuserName(username) {
    this.username= username
    console.log('called');
}

function createUser(username,email,password){
    /* if we dont use call then the function will complete its execution and leave the call stack.
    hence  we use call to store the referance of that fn. */
    setuserName(username)

    //this statement will call and hold the reference but it will be store in 'this' of setUsername fn.
    setuserName.call(username)

    // hence we give this keyword to specify that use reference of 'this' fn.
    setuserName.call(this,username)
    this.email=email
    this.password=password
}

const soham = new createUser('soham','soham@gg.com','12345')
console.log(soham);
