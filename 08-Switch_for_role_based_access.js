//Create an application with the following roles:
//admin ==> gets full access
//subadmin ==> gets access to create/delete courses
//testprep ==> gets access to create/delete mock tests
//user ==> gets access to consume content

//Test cases
var user = "admin"; //Case1
// var user = "subadmin"; //Case2
// var user = "testprep"; //Case3
// var user = "user"; //Case4
// var user = "xyz"; //default Case

//for the question, you must have thought to use if and else statements.
//Yes you can do that but there's something much better i.e Switch-Case

switch(user){
	//case1
	case "admin":
	console.log("You got full access");
	break;
	//case2
	case "subadmin":
	console.log("You got access to create/delete courses");
	break;
	//case3
	case "testprep":
	console.log("You got access to create/delete mock tests");
	break;
	//case4
	case "user":
	console.log("You got full access");
	break;
	//default case
	default:
	console.log("You got full access");
	break;
}