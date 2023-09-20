'use strict'

let name = [];
/*let a = prompt('Enter 1');
name.push(a);
console.log(name);

a = prompt('Enter 2');
name.push(a);
console.log(name);*/
let b = prompt('How many students?');
let count = 1;

const addNewStudent = function(start, sum){
	if(start <= sum){
	let a = prompt('Enter name');
	name.push(a);
	count++;
	addNewStudent(start, sum);
}
}

addNewStudent();

/*addNewStudent(4);
addNewStudent(4);
addNewStudent(4);
addNewStudent(4);*/

console.log(name);