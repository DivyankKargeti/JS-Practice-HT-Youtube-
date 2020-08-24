//CALLBACK AND AROOW FUNCTIONS

//Tradition way
//Check Even
function isEven(val){
	if(val % 2 === 0){
		return true;
	}else{
		return false;
	}
}
console.log("Traditional way");

console.log(isEven(4));

//Shrinking the same code
function isEven(val){
	return val % 2 === 0;
}

console.log("Shrinked function");

console.log(isEven(4));

//ARROW FUNCTIONS WAY
var isEven = (val) => {	
	return val % 2 === 0;
}

console.log("Arrow Function");

console.log(isEven(5));

//CALLBACK FUNCTIONS
console.log("Callback function");

var result =[2,4,6,8].every(isEven); 
//every()-->>> it is a callback function that checks on every element in the array.
//and if all these elements are true then it returns true.
//otherwise, if any of the element of the is not even then it returns false.
console.log(result);


//other way
var result = [2,3,6,8].every( (e) => (e % 2 === 0));

console.log("Other way")

console.log(result);