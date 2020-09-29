//While loop and Do While loops

var my_States = ["Haryana" , "Gujarat" , "Punjab" , "Assam" , "Rajasthan"];


//while loop

// let i = 0;
// while(i < my_States.length){
// 	console.log(my_States[i]);
// 	i++;
// };


//////////////////////////////////

//do...while loop

let i = 0;
do{
	console.log(my_States[i]);
	i++;
}while(i < my_States.length);


//NOTE: 
//do while will atleast run for once
//even if the condition is false.
//This is bcz..As the name suggests, It do / does frst and then check the condition