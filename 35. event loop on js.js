const uno = () => {
	console.log("I am One!");
};

const dos = () => {
	setTimeout(()=>{
		console.log("Wohooooo");
	},300);
	console.log("I am Two!");
};

const tres = () => {
	console.log("I am Three!");
};


uno();
dos();
tres();