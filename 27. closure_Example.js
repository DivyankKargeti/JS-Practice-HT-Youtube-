function doAddition(x){
	return function (y){
		return x+y;
	};
}

var add5 = doAddition(4);
console.log(add5(5));

//concept of currying ==>> func_name()()() ==>> this is called currying
var add5 = (doAddition(5)(5));
console.log(add5);
