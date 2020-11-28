//CLASS
class User{
	constructor(name, email){
		this.name = name;
		this.email = email;
	}
	courselist = [];
	getInfo(){
		return {name: this.name, email: this.email};
	} 
	enrollCourse(name){
		return this.courseList.push(name);
	} 
	getInfo(){
		return this.courseList;
	} 
}


/////////////////////////
	//Study OOPS from GFG or any other
////////////////////////