function V1() {
	const a = parseFloat(document.getElementById('input_V1_a').value)
	const b = parseFloat(document.getElementById('input_V1_b').value)
	const c = parseFloat(document.getElementById('input_V1_c').value)

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.getElementById('ans_V1').innerText =
			'Пожалуйста, введите все три числа.'
		document.getElementById('ans_V1').className = 'mt-2 alert alert-danger'
		return
	}
	document.getElementById('ans_V1').className = 'mt-2'

	let min,
		max,
		sameCount = 0

	min = Math.min(a, b, c)
	max = Math.max(a, b, c)

	if (a === b && b === c) {
		document.getElementById('ans_V1').innerText = 'Числа равны'
		return
	} else {
		sameCount = a === b || a === c || b === c ? 2 : 0

		let sum = a + b + c
		let average = sum / 3

		let resultString = `Минимальное значение: ${min}, Максимальное значение: ${max}, Среднее значение: ${average.toFixed(
			2
		)}`
		if (sameCount > 0) {
			resultString += `, Одинаковых чисел: ${sameCount}`
		}

		document.getElementById('ans_V1').innerText = resultString
		document.getElementById('ans_V1').className = 'mt-2'
	}
}

function V21() {
	const a = parseFloat(document.getElementById('input_V21_a').value)
	const b = parseFloat(document.getElementById('input_V21_b').value)
	const c = parseFloat(document.getElementById('input_V21_c').value)

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.getElementById('ans_V21').innerHTML =
			'Пожалуйста, введите валидные числа.'
		document.getElementById('ans_V21').className = 'mt-2 alert alert-danger'
		return
	}
	document.getElementById('ans_V21').className = 'mt-2'
	if (a === 0) {
		if (b === 0) {
			document.getElementById('ans_V21').innerHTML =
				c === 0
					? 'Уравнение имеет бесконечно много решений.'
					: 'Уравнение не имеет решений.'
		} else {
			const x = -c / b
			document.getElementById(
				'ans_V21'
			).innerHTML = `Уравнение имеет один корень: x = ${x.toFixed(2)}`
		}
	} else {
		const D = b * b - 4 * a * c
		if (D < 0) {
			document.getElementById('ans_V21').innerHTML =
				'Уравнение не имеет действительных корней.'
		} else if (D === 0) {
			const x = -b / (2 * a)
			document.getElementById(
				'ans_V21'
			).innerHTML = `Уравнение имеет один корень: x = ${x.toFixed(2)}`
		} else {
			const x1 = (-b + Math.sqrt(D)) / (2 * a)
			const x2 = (-b - Math.sqrt(D)) / (2 * a)
			document.getElementById(
				'ans_V21'
			).innerHTML = `Уравнение имеет два корня: x1 = ${x1.toFixed(
				2
			)}, x2 = ${x2.toFixed(2)}`
		}
	}
}

function V22() {
	const a = parseFloat(document.getElementById('input_V22_a').value)
	const b = parseFloat(document.getElementById('input_V22_b').value)
	const c = parseFloat(document.getElementById('input_V22_c').value)
	const d = parseFloat(document.getElementById('input_V22_d').value)

	if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
		document.getElementById('ans_V22').innerHTML =
			'Пожалуйста, введите валидные числа.'
		document.getElementById('ans_V22').className = 'mt-2 alert alert-danger'
		return
	}
	document.getElementById('ans_V22').className = 'mt-2'

	if (a === 0 && b === 0) {
		if (c === 0) {
			document.getElementById('ans_V22').innerHTML =
				d === 0
					? 'Уравнение имеет бесконечно много решений.'
					: 'Уравнение не имеет решений.'
		} else {
			const x = -d / c
			document.getElementById(
				'ans_V22'
			).innerHTML = `Уравнение имеет один корень: x = ${x.toFixed(2)}`
		}
	} else if (a === 0) {
		const D = c * c - 4 * b * d
		if (D < 0) {
			document.getElementById('ans_V22').innerHTML =
				'Уравнение не имеет действительных корней.'
		} else if (D === 0) {
			const x = -c / (2 * b)
			document.getElementById(
				'ans_V22'
			).innerHTML = `Уравнение имеет один корень: x = ${x.toFixed(2)}`
		} else {
			const x1 = (-c + Math.sqrt(D)) / (2 * b)
			const x2 = (-c - Math.sqrt(D)) / (2 * b)
			document.getElementById(
				'ans_V22'
			).innerHTML = `Уравнение имеет два корня: x1 = ${x1.toFixed(
				2
			)}, x2 = ${x2.toFixed(2)}`
		}
	} else {
		document.getElementById('ans_V22').innerHTML =
			'Решение кубических уравнений не реализовано'
	}
}

function V3() {
	const M = parseFloat(document.getElementById('input_V3_M').value)
	const N = parseFloat(document.getElementById('input_V3_N').value)

	if (isNaN(M) || isNaN(N) || N <= 0) {
		document.getElementById('ans_V3').innerHTML =
			'Пожалуйста, введите корректные значения.'
		document.getElementById('ans_V3').className = 'mt-2 alert alert-danger'
		return
	}
	document.getElementById('ans_V3').className = 'mt-2'

	const percent = (M / N) * 100
	let grade
	if (percent < 50) {
		grade = 'неудовлетворительно'
	} else if (percent <= 65) {
		grade = 'удовлетворительно'
	} else if (percent <= 85) {
		grade = 'хорошо'
	} else if (percent <= 100) {
		grade = 'отлично'
	} else {
		grade = 'процентное значение выходит за пределы шкалы'
	}

	document.getElementById('ans_V3').innerHTML = `Ваша оценка: ${grade}`
}

function V4() {
	const a = parseFloat(document.getElementById('input_V4_a').value)
	const b = parseFloat(document.getElementById('input_V4_b').value)
	const c = parseFloat(document.getElementById('input_V4_c').value)

	if (a <= 0 || b <= 0 || c <= 0) {
		document.getElementById('ans_V4').innerHTML =
			'Треугольник не существует (стороны должны быть больше 0).'
		return
	}
	document.getElementById('ans_V4').className = 'mt-2'

	if (!(a + b > c && a + c > b && b + c > a)) {
		document.getElementById('ans_V4').innerHTML = 'Треугольник не существует.'
		return
	}

	let type = 'Существует, '

	if (a === b && b === c) {
		type += 'Равносторонний треугольник.'
	} else if (a === b || a === c || b === c) {
		type += 'Равнобедренный треугольник, '
	}

	const sidesSquared = [a * a, b * b, c * c].sort((x, y) => x - y)
	if (sidesSquared[2] === sidesSquared[0] + sidesSquared[1]) {
		type += 'Прямоугольный треугольник.'
	} else if (sidesSquared[2] < sidesSquared[0] + sidesSquared[1]) {
		type += 'Остроугольный треугольник.'
	} else {
		type += 'Тупоугольный треугольник.'
	}

	document.getElementById('ans_V4').innerHTML = type
}

function V5() {
	let n = parseInt(document.getElementById('input_V5_x').value)

	if (isNaN(n) || n <= 0 || n > 1000) {
		document.getElementById('ans_V5').innerHTML = 'Введите число от 1 до 1000.'
		document.getElementById('ans_V5').className = 'mt-2 alert alert-danger'
		return
	}

	document.getElementById('ans_V5').className = 'mt-2'

	const deci = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	const rom = [
		'M',
		'CM',
		'D',
		'CD',
		'C',
		'XC',
		'L',
		'XL',
		'X',
		'IX',
		'V',
		'IV',
		'I'
	]

	let res = ''

	for (let i = 0; i < deci.length; i++) {
		while (n >= deci[i]) {
			res += rom[i]
			n -= deci[i]
		}
	}
	console.log(res)
	document.getElementById('ans_V5').innerHTML = `Результат: ${res}`
}

function V6() {
	const month = parseInt(document.getElementById('input_V6_m').value)
	const day = parseInt(document.getElementById('input_V6_d').value)
	const year = parseInt(document.getElementById('input_V6_y').value)

	const dateStr = `${year}-${month}-${day}`
	const date = dayjs(dateStr)
	if (!date.isValid()) {
		document.getElementById('ans_V6').innerHTML = 'Пожалуйста, введите корректные значения даты.'
		document.getElementById('ans_V6').className = 'mt-2 alert alert-danger'
		return
	}
	const formattedDate = `${date.format('dddd')}, ${date.format('MMMM')}`

	document.getElementById('ans_V6').innerHTML = `Дата: ${formattedDate}.`
	document.getElementById('ans_V6').className = 'mt-2'

}
