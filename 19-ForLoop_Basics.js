//FOR LOOP BASICS

//Basic for loop to iterate and print 1 to 10
// for (let i = 0; i<=10 ; i++){
// 	console.log(i);
// }

const myStates = ["Rajasthan" , "Assam" , "Gujarat" , 1948 , "Tamil Nadu" , "Maharashtra"];


for(let i = 0 ; i <= myStates.length ; i++){
	console.log(myStates[i]);
}//Outputs udefined at the last of the loop...Ths is happenning bcz <= that we have used... the loop going to one extra idx which not present

console.log("#################################");
 //fixing the issue - replacing <= with < 
for(let i = 0 ; i < myStates.length ; i++){
	console.log(myStates[i]);
}

//Suppose we don't want the integer val i.e in our case 1948
console.log("################################");

for(let i = 0 ; i < myStates.length ; i++){
	if(typeof myStates[i] !== 'string') continue;
		console.log(myStates[i]);
}
