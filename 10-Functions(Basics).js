//===================//

// function sayHello(){
// 	console.log("Hello, World!");
// }

// sayHello(); // Calling a function

//====================//

// function sayHello(name){
// 	console.log("Hello, Divyank");
// 	console.log(`Hey Hello ${name}, How are you?`);
// }

// sayHello(); // Outputs undefined
// sayHello("SAGAR"); //Outputs "Hey Hello SAGAR, How are you?" 

//====================//

//FUNCTIONAS WITH RETURN

function namastey(){
	return "Hello from India";
}

//calling - Case 1
namastey(); // nothng will happen here in Output as we just called function
            //but we didn't ask it to print or return something            

//calling - Case 2
console.log(namastey()); //Outputs the return String

//calling - Case 3
var greetings = namastey(); // storning return in a variable and then printing/calling
console.log(greetings);