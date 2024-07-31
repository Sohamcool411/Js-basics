const AccountId=14433 //cant change the const
let accountEmail='soham@gmail.com'
var accountPass='12345' //should not use due to issues in block scope
accountCity='Jaipur'
let accountState

accountEmail='sp@gmail.com'
accountPass='11111'
//AccountId=12345
accountCity='Mumbai'

console.log(AccountId)
console.table([accountEmail,accountPass,accountCity,accountState])
