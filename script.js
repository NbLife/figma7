'use strict';
//alert('I will remember all termins');

//var d;
//let userName = 'значение';
//const net;
//console.log(userName);

/*let a = prompt('Number 1');
let b = prompt('Number 2');
console.log(typeof a);
console.log(typeof b);

let result = a + b;
console.log(typeof result);

console.log(result);*/

/*let a = prompt('Number 1');
console.log(typeof a);
console.log(a);

a = parseInt(a);
console.log(typeof a);
console.log(a);*/
let a = prompt('Number 1');
let b = prompt('Number 2');
//let result_1 = Number(a) + Number(b);
/*let result_1 = +a  + +b;
let result_2 = a - b;
let result_3 = a * b;
let result_4 = a / b;*/
/*if(b==0){
	console.log('Сумма - ' + +a  + +b);
	console.log('Разница - ' + a - b);
	console.log('Умножение - ' + a * b);
	console.log('На ноль делить нельзя');
}
else{
	console.log('Сумма - ' + +a  + +b);
	console.log('Разница - ' + a - b);
	console.log('Умножение - ' + a * b);
	console.log('Деление - ' + a / b);
}*/
const summa = function(r1, r2){
	let res = +r1 + +r2;
	return res;
	//console.log(`Сумма чисел ${r1} и ${r2} равна ${res}`);
}
summa(a, b);
const razniza = (r1, r2) =>{
	let res = r1 - r2;
	return res;
	//console.log(`Разница чисел ${r1} и ${r2} равна ${res}`);
}
razniza(a, b);
ymnovenie(a, b);
function ymnovenie(r1, r2){
	let res = r1 * r2;
	return res;
	//console.log(`Умножение чисел ${r1} и ${r2} равна ${res}`);
}
delenie(a, b);
function delenie(r1, r2){
	if(b==0){
		return 'На ноль делить нельзя';
		//console.log('На ноль делить нельзя')
	}
	else{
	let res = r1 / r2;
	return res;
	//console.log(`Деление чисел ${r1} и ${r2} равна ${res}`);
	}
}

console.log(`Сумма чисел ${a} и ${b} равна ${summa(a, b)}`);
console.log(`Разница чисел ${a} и ${b} равна ${razniza(a, b)}`);
console.log(`Умножение чисел ${a} и ${b} равна ${ymnovenie(a, b)}`);
console.log(`Деление чисел ${a} и ${b} равна ${delenie(a, b)}`);





/*const rezult = function(dohod, rashod){
	let c = (dohod - rashod) / 30;
	console.log(`Средняя суточная сумма ${c} грн.`);
	return c;
}


const ocenka =function(summa){
	let d;
	if(summa < 300){
			return 'У вас низкий уровень дохода';
		}else if(summa < 2000){
			return 'У вас нормальный уровень дохода';
		}else{
			return 'Поздравляем! У вас высокий уровень дохода';
		}
	return d;
}


let a = prompt(`Укажите свой ежемесячный доход`);
let b = prompt(`Укажите среднюю сумму расходов`);
let d = rezult(a, b);
console.log(`Средняя суточная сумма ${d} грн`);
console.log(ocenka(d));*/