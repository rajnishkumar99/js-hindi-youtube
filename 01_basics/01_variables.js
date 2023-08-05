const accountId = 144
let accountEmail = "aghorirajnish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "razz@gamil.com"
accountPassword = "565656"
accountCity = "Bihar"
let accountState;

// accountId = 55    //not allowed
/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])