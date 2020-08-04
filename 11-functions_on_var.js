
//General function Creation

// function getUserRole(name, role){
// 	switch(role){
// 		case "admin":
// 		return `${name} is admin with all access`;
// 		break;

// 		case "subadmin":
// 		return `${name} is sub-admin with all access to create and delete`;
// 		break;

// 		case "testprep":
// 		return `${name} is testprep with all access create and delete tests`;
// 		break;

// 		case "user":
// 		return `${name} is User with access to consume the content`;
// 		break;

// 		default:
// 		return `${name} is a trial user`;
// 		break;
// 	}
// }

//Different way of  function Creation

/*
Here we're declaring a function and storing it in a variable.
But yes, this can be done in JS and it runs exactly the same
*/
//Also this kind of function is used in frameworks like React and Angular

var getUserRole = function (name, role){
	switch(role){
		case "admin":
		return `${name} is admin with all access`;
		break;

		case "subadmin":
		return `${name} is sub-admin with all access to create and delete`;
		break;

		case "testprep":
		return `${name} is testprep with all access create and delete tests`;
		break;

		case "user":
		return `${name} is User with access to consume the content`;
		break;

		default:
		return `${name} is a trial user`;
		break;
	}
}

var Output = getUserRole("Divyank", "admin");

console.log(Output);