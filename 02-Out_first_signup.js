//let's a look into creating a signup form

//const --> It means the global variable that cannot be changed.

const uid = "abc123";

// uid = "abc34232"; //modifying a const pr global var is not possible.

//INDUSTRY TYPE VAR NAMES
var fullName = "Divyank Kargeti";
var email = "dk@gmail.com";
var password = "123456@dk2999";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

//TAKING INPUT FROM USER
//One way of taking input the user is using 'Prompt'.
//Prompt is similar to alert() in JS

// fullname = prompt("Enter your name");

//here, we are taking input from the user and storing it in a var called fullname.


//LET'S OUTPUT OUR VARS

//One Way is by using console.log() i.e :

console.log("User ID is: " + uid);
console.log("Name: " + fullName);
console.log("email is: " + email);
console.log("Use this PW: " + password);

//ANOTHER MUCH BETTER WAY IS BY USING 'Template Strings'. It gives more and more flexibility

//SYNTAX ===>>> console.log(`jvnnsn ${var_name} jfnlnzfcn`);

console.log(`
	UserID is: ${uid}
	Name: ${fullName}
	email is: ${email}
	Used this password : ${password}
	`);
//Template strings More readable code and easier syntax