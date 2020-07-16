//CONDITIONALS IN JS

//We'll will try to understand the concept by taking an example of an app that tells the temperature and gives custom messages.

var temperature;

//TODO : Assuming we have gottemperature data from google.

//It gave us a value as below:
temperature = 26;


if(temperature<20){
	console.log("It's very cold outside");
}
if(temperature<30){
	console.log("its moderate outside");
}
else{
	console.log("It's really hot outside");
}