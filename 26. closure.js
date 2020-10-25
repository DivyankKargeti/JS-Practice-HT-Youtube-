////////////////////////////////////////////////////
			// CLOSURE IN JS //
////////////////////////////////////////////////////


function init(){
	var firstName = "Divyank";
	function sayFirstName(){
		console.log(firstName);
	}
	return sayFirstName; // not calling funvt but returning it
}

var xyz = init(); // not directly calling th e function rather storing or keeping its reference in the var. called 'xyz'

xyz(); // calling it indirectly --->>> CLOSURE
