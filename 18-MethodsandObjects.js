var user = {
	firstName : "Divyank",
	lastName : "Kargeti",
	role : "Admin",
	loginCount : 32,
	facebookSignedIn : true,
	courseList : [],
	buyCourse : function (courseName) {
		this.courseList.push(courseName); //this.courseList here is same as user.courseList
	},
	getCourseCount : function (){
		return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
	},
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount()); //Outputs theat user is emrolled in zero courses...which is correct bcz right now there's nothing in the courseList


//Now first enrolling into the courses...Using the buyCourse

user.buyCourse("ReactJs");
user.buyCourse("Django");

console.log(user.getCourseCount());


//Assignment - Designing the Info method

function info(){
	return `
	        Firstname: ${user.firstName}
            Lastname: ${user.lastName}
            Role: ${user.role}
            Login Count: ${user.loginCount}
            FaceSigned?: ${user.facebookSignedIn}
            Enrolled Courses: ${user.courseList}
	`;
}

console.log(info());