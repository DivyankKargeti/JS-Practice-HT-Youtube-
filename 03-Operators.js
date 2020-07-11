// var num1 = 7;
// var num2 = 6;

// console.log(num1 + num2); // 13
// console.log(num1 * num2); // 42
// console.log(num1 - num2); // 1

//----------------------------

// var answer = num1 > num2; 
// console.log(answer); // Yes therefore, Outputs 'true'

//====================================================

// Real world Use case

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ( (listingPrice - sellingPrice) / listingPrice ) * 100;

console.log("Discount Percentage is: " + discountPercent); //It outputs 75.09386733416771 ==> which should not be the case as a lot of decimal vals are being displayed.


displayDiscountPercentage = Math.round(discountPercent); // Js has a inbuild module i.e Math() and we use Math.round() method to round off the value.
console.log("Discount Percentage is: " + displayDiscountPercentage); // Outputs 75 ==> Which is correct way 
