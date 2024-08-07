class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){ // this fn is returned when User.password is called.
        return this._password.toUpperCase()
    }
    set password(value){ //this fn is performed when User.password is assigned a value
        this._password=value 
        // here a new variable '_password' is created in 'this' context i.e class
        // we will store the value of password in that variable.
    }
}
const soham=new User('soham','abc')
console.log(soham.password);


// get and set act just like property and not methods.
// they just overwrite the original properties.
// e.g 'get password' will overwrite 'this.password' 
