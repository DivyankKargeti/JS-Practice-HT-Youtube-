//FILL AND FILTER IN ARRAYS

//FILL METHOD
var testArray = new Array(2,3,5,4,21,9,8);

//Fill method

// console.log(testArray.fill(0)); // fills the arrya values as 0

// console.log(testArray.fill('d')); // fills the arrya values as 'd'

//fill with params --->>> (val, start, end)

console.log(testArray.fill('d',2,5));

//====================================//

//FILTER METHOD

var myNumber = [23,24,25,55,44,66,77,88,110];

const result  = myNumber.filter((num) => num != 50);

const result2  = myNumber.filter((num) => num < 55);

console.log(result);
console.log(result2);