//Destructuring in JS ES5 and ES6

//Traditional way
var myArray = ["A","B","C"];

var t1 = myArray[0];
var t2 = myArray[1];
var t3 = myArray[2];

console.log(t1);
console.log(t2);
console.log(t3);


//
console.log("*******************");
//


//Destructuring way -ES6 way
var myarr = ["a","b","c"];

let [x,y,z] = myarr;

console.log(x);
console.log(y);
console.log(z);