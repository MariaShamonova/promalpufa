var group1 = new Object();
group1.id = 1;
group1.number = "301";
group1.programm = "Б301.05";

group1.students = [];

for(var i = 1; i <= 5; i++){
	let student = new Object();
	student.id = i;
	student.name = "Name " + i;
	group1.students.push(student);
}

let group1text = JSON.stringify(group1);
console.log(`Group 1: ${group1text}`);

var groupParsed = JSON.parse(group1text);
console.log(`Group 2: id=${groupParsed.id}, count=${groupParsed.students.length}`)
