//ARRAYS IN JS

//Used to store multiple data
//I which one could have used different variabls


//Array Declaration
var countries = ["India","USA","London","Canada"];

//New method of declaring variables
var states = new Array("Rajasthan","Assam","Gujarat","Uttrakhand");

//Printing array
console.log(countries);
console.log(states);

//Access particular tuple/bucket of the array
console.log(states[1]);

//DIFFERENT ARRAY METHODS

//length
console.log(states.length); // O/P = 4

//replacing values
states[0] = "Himachal"; //value of Rajasthan is being updated or replace
console.log(states);

//Array to store user data
var user = new Array("Divyank" , "dk@gmail.com" , 99992329929, 32, true);
console.log(user);
///But but but it is not at all a good data Structure
//to store such a data

//pop() => deleted from end
user.pop();//last 1 element deleted
user.pop();//last 1 + new last one deleted
console.log(user);

//unshift() => deleted from end
user.unshift("sometest");//last 1 element deleted
user.shift();//last 1 + new last one deleted
console.log(user);