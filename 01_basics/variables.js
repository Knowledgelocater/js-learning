const accountId = 123445
let accountName = "KK"
var accountMail = "kk@gmail.com"
accountCity = "Jamshedpur"

// accountId = 9 // not allowed

accountName = "Ram"
accountMail = "hc@hc@gmail.com"
accountCity = "Tata"
let accountState;
console.log(accountId);
/*
prefer not to use var
because of issure in block scope and functional scope
*/
console.table([accountId , accountMail , accountName , accountCity, accountState]);