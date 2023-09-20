'use strict'
/*let a = prompt('Укажите площадь: ');
let b = prompt('Укажите тип помещения(квартира, ч. дом, оfис)');

const price = function(price_2, a_2){
	if(price_2=='квартира'){
		return 'Приблизительная стоимость ремонта: ' + a_2 * 100;
	}
	if(price_2=='ч. дом'){
		return 'Приблизительная стоимость ремонта: ' + a_2 * 150;
	}
	if(price_2=='оfис'){
		return 'Приблизительная стоимость ремонта: ' + a_2 * 300;
	}
}

console.log(price(b, a));*/

let a = prompt('Укажите к-во кубов в апреле: ');
let b = prompt('Укажите к-во кубов в мае: ');
let c = prompt('Укажите к-во кубов в июне: ');

const price = function(t){
	return t * 8.9;
}
const summa = function(d, e, m){
	return (t(d) + t(e) + t(m)) / 3;
}

console.log('Сумма в апреле: ' + price(a));
console.log('Сумма в мае: ' + price(b));
console.log('Сумма в июне: ' + price(c));
console.log('Средняя сумма: ' + summa(a, b))
