 //HOISTING IN JS


sayName("Divyank"); //calling a function before its declaration.
//This is possile in JS through a concept of Hoisting. 
//This means that automatically JS hoists or takes all the functions above everything nd makes it ready.....Exactly as Flag Hoisting
//In other languages like C, C++, Java the function call must be below the function declaration but JS gives us this advantage.

SayName2();//This will raise Error as this func is not hoisted in JS
//Therefore It needs to be called after function declaration

// gneral function declaration
function sayName(name){
	console.log(`Hey Mr. ${name}`);
}

//Function stored in a var
var SayName2 = function(){
	console.log("Hello");
}

SayName2();//This will WORK fine bcoz It needs to be called after function declaration