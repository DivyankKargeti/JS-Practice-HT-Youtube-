//SLICE AND SPLICE IN ARRAYS ( JavaScript)

var users = ["Ted" , "Tim" , "Ton" , "Sam" , "Sor" , "Sod" ];


//SLICE

// console.log(users.slice(1 , 3)); // Tim , Ton
// console.log(users.slice(1 , 4)); //Tim , Ton , Sam


//SPLICE

console.log(users.splice(1,2,"Hi")); //(start , count after start , replace word)
