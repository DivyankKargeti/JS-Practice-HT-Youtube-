//Spread and Rest opertors

//To understand the need for spread and rest operators 
//We need to first understand a problem

//////////////////////
      //PROBLEM
/////////////////////

function sumOne(a,b){
	return a+b;
}

//normal case:
console.log(sumOne(3,5)); // outputs 8(correct output)

//problem:
var myA = [5,4];
console.log(sumOne(myA)); // outputs undefined (Wrong ans)


///////////////////
	//SOLUTION
//////////////////

console.log(sumOne(...myA)); //use of spread operator