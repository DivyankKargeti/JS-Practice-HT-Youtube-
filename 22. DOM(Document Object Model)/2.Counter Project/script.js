var counter = document.querySelector(".counter");

var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
	if(count < 1000){
		count++;
		counter.innerText = count;
	}
}, 1) //after 1 milli second

 setTimeout(() => {
 	followers.innerText = "Followers on Instagram!"; //Text to modify after 1000 number transition
 } , 4000);//after 4 milli sec