//User is only allowed to make a purchase when he/she is:
//logged in
//email verified
//cardInfo - valid
//If any one of the above condition is missing, stop purchase.


var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
// 	console.log("Log in Success");
// 	if(isEmailVerified){
// 		console.log("Email is Verified");
// 		if(cardInfo){
// 			console.log("You can make a purchase");
// 		}
// 	}
// }

//Better way - In one line of code
 //AND operator (&&) == if all are true then run
 //OR operator (||) == if one condition is true then run
if(isLoggedIn && isEmailVerified && cardInfo ){
	console.log("Allow User to make a purchase");
}else{
	console.log("Not Allowed");
}