//Maps in JS

var myMap = new Map(); //initializing map named myMap
						//Maps are not OBJECTS

myMap.set(1, "One"); //key value pairs
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");

console.log(myMap);

//accesing values and keys in maps

//for getting only keys
for(let key of myMap.keys()){
	console.log(`Key is ${key}`);
}
//for getting only values
for(let value of myMap.values()){
	console.log(`value is ${value}`);
}
//for getting both keys and values
for(let [key,value] of myMap){
	console.log(`Key is: ${key} and value is: ${value} `);
}