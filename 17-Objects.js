//Objects in JS

var user = {
	firstName : "Divyank",
	lastName : "Kargeti",
	role : "Admin",
	loginCount : 32,
	facebookSignedIn : true,

};

console.log(user.firstName);

//another way - I dont like it
console.log(user["lastName"]);

//Manipulating and updating values
user.loginCount = 43;
console.log(user.loginCount)


//dumping all of the object
console.log(user);
