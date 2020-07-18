//show user a signup bbutton if he is authenticated,
//otherwise show him option to Login/Signup

var authenticated = false;

//Method 1
// if(authenticated){
// 	console.log("Show Signup button");
// }
// else{
// 	console.log("Show login option");
// }


//METHOD 2 ==>>> Ternary Operator
//Syntactic Sugar 
//Short-hand notation
// Syntax===>>>  var_to_be_evaluated ? if_Cond. : else_Cond. 

authenticated ? console.log("Show Signup button") : console.log("Show login option") ;