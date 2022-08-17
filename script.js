/* Задания на сайте lernjavascript

lesson Условное ветвление: if, '?' */

/* let ecma = prompt('Какое «официальное» название JavaScript?')
if (ecma == 'ECMAScript') {
	alert('Верно!')
} else {
	alert ('Не знаете? ECMAScript!')
} */


/* let number = prompt ('Введите число?', 0)
if (number == 0) {
	alert ('равно нулю')
} else if (number > 0) {
	alert ('больше нуля')
} else if (number < 0) {
	alert ('меньше нуля')
}  */


/* let result = (a+b<4) ? 'Мало' : 'Много'; */

/* let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' :
(login == 'Нет логина') ? ''; */


//-------------------------------------------------------------------------------------------
/* Логические операторы */


let userName = prompt ('who?', '')
if (userName === 'vlad') {
	let password = prompt ('vvedite parol', '')
		if (password === 'boss1234') {
			alert ('HI BOSS WELCOME!')
		} else if ( password === '' || password === null) {
			alert ('cansel')
		} else {
			alert ('UNKNOWN PASSWORD')
		}
	
} else if (userName === '' || userName === null) {
 alert ('CLOSE!')
} else {
	alert ('i dont know you!')
}

