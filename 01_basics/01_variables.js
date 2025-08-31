const accountId = 309543
let accountEmail = "akash.b@paruluniversity.ac.in"
var accountPassword = "12345"
accountCity = "Vadodara"
let accountState;


//accountId = 2 //not allowed

 accountEmail = "akas@gmail.com"
 accountPassword = "9087"
 accountCity = "Ahmedabad"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

