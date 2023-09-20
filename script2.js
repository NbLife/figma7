'use strict';
/*let a = prompt('Number 1');
if(a == 1){
	console.log('Januar');
}else if (a == 2){
	console.log('February');
}else if (a == 3){
	console.log('March');
}else if (a == 4){
	console.log('Аpril');
}else if (a == 5){
	console.log('May');
}else if (a == 6){
	console.log('June');
}else if (a == 7){
	console.log('July');
}else if (a == 8){
	console.log('Аugust');
}else if (a == 9){
	console.log('September');
}else if (a == 10){
	console.log('October');
}else if (a == 11){
	console.log('November');
}else if (a == 12){
	console.log('December');
}else{
	console.log('Такого месяца нету')
}*/
const month = function(chislo){
	if(chislo <= 0 || chislo > 12){
		return'Такого месяца нету';
	}else{
	if(chislo == 1){return 'Januar';}
	if(chislo == 2){return 'Januar';}
	if(chislo == 3){return 'Januar';}
	if(chislo == 4){return 'Januar';}
	if(chislo == 5){return 'Januar';}
	if(chislo == 6){return 'Januar';}
	if(chislo == 7){return 'Januar';}
	if(chislo == 7){return 'Januar';}
	if(chislo == 8){return 'Januar';}
	if(chislo == 9){return 'Januar';}
	if(chislo == 10){return 'Januar';}
	if(chislo == 11){return 'Januar';}
	if(chislo == 12){return 'Januar';}
	}
}
let a = prompt('Введите номер месяца:');
console.log(month(a));
