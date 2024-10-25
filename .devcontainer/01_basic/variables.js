const accountId = 123
let accountEmail = "harsh@google.com"
var accountPass = "12345"
accountCity = "Indore"
let accountState;

//accountId = 2  //not allowed

accountEmail = "harsh@patidar.com"
accountPass = "54321"
accountCity = "Banglore"

console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId,accountEmail,accountPass,accountCity,accountState])