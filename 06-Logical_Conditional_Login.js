//Allow user to access course if he is:
//logged in from email
//logged in from Google
//logged in from facebook

var email = true;
var facebook = false;
var google = false;

//Way 1 -- not preferred

// if(email == true){
// 	console.log("email logged in");
// }
// if(facebook == true){
// 	console.log("facebook logged in");
// }
// if(google == true){
// 	console.log("google logged in");
// }

//Way2 -- preferred and easier to do

if(email || facebook || google){
	console.log("Logged in");
}
else{
	console.log("Not Allowed to Access");
}