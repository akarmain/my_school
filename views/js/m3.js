function C1() {
	const inputField = document.querySelector('.task-input-c1 input[type="text"]')
	const n = parseInt(inputField.value, 10)

	function calculateFactorial(n) {
		if (n === 0 || n === 1) {
			return 1
		} else {
			let factorial = 1
			for (let i = 2; i <= n; i++) {
				factorial *= i
			}
			return factorial
		}
	}

	if (!isNaN(n) && n < 20) {
		let result = ''
		for (let i = 1; i <= n; i++) {
			result += `${i}! = ${calculateFactorial(i)}<br>`
		}
		document.getElementById('ans_C1').innerHTML = result
		document.getElementById('ans_C1').className = 'mt-2'
	} else {
		document.getElementById('ans_C1').innerHTML =
			'Введите число меньше 20.'
		document.getElementById('ans_C1').className = 'mt-2 alert alert-danger'
	}
}


function C2() {
	const inputText = document.querySelector('.task-input-c2 textarea').value
	const lines = inputText.split('\n')
	if (lines.length < 2) {
		document.getElementById('ans_C2').innerHTML =
			'Неверный формат ввода. Необходимо ввести N и M, а затем числа.'
		document.getElementById('ans_C2').className = 'mt-2 alert alert-danger'
		return
	}
	const N = parseInt(lines[0].trim(), 10)
	const M = parseInt(lines[1].trim(), 10)

	if (lines[2].split(' ').length !== N) {
		document.fgetElementById('ans_C2').innerHTML =
			'Количество введенных чисел не соответствует указанному N.'
		document.getElementById('ans_C2').className = 'mt-2 alert alert-danger'
		return
	}

	const numbers = lines[2].split(' ').map(Number)
	let sum = 0,
		product = 1,
		positive = 0,
		negative = 0,
		zero = 0,
		odd = 0,
		even = 0

	numbers.forEach(num => {
		sum += num
		product *= num
		if (num > 0) positive++
		if (num < 0) negative++
		if (num === 0) zero++
		if (num % M === 0) even++
		else odd++
	})
	document.getElementById(
		'ans_C2'
	).innerHTML = `S=${sum}, P=${product}, Pos=${positive}, Neg=${negative}, Zero=${zero}, Odd=${odd}, Even=${even}`
	document.getElementById('ans_C2').className = 'mt-2'
}

function C3() {
	const input = document.getElementById('inputData').value.trim()
	const [a1, d, N] = input.split(' ').map(Number)

	if ((a1 === undefined) | (d === undefined) | (N === undefined)) {
		document.getElementById(
			'ans_C3'
		).innerHTML = `Ошибка в вводе. Введите a1 d N (1 2 5)`
		document.getElementById('ans_C3').className = 'mt-2 alert alert-danger'
		return
	}

	let arithmeticProgression = '',
		geometricProgression = ''
	let sumArithmetic = 0,
		sumGeometric = 1,
		aN = a1,
		gN = a1

	for (let i = 0; i < N; i++) {
		arithmeticProgression += `${aN}, `
		geometricProgression += `${gN}, `
		if (i === 0) {
			sumArithmetic = aN
			sumGeometric = gN
		} else {
			sumArithmetic += aN
			sumGeometric += gN
		}
		aN += d
		gN *= d
	}
	arithmeticProgression = arithmeticProgression.slice(0, -2)
	geometricProgression = geometricProgression.slice(0, -2)

	const ansArithmetic = `Арифметическая: ${arithmeticProgression}, S=${sumArithmetic}.`
	const ansGeometric = `Геометрическая: ${geometricProgression}, S=${sumGeometric}.`
	document.getElementById(
		'ans_C3'
	).textContent = `${ansArithmetic} ${ansGeometric}`

	document.getElementById('ans_C3').className = 'mt-2'
}


function C4() {
	const n = document.getElementById('fibonacciInput').value
	let resultStr = ''
	let sum = 0

	console.log(n)

	if (n <= 0 || n >= 50) {
		document.getElementById('ans_C4').textContent = 'Введите число от 1 до 49.'
		document.getElementById('ans_C4').className = 'mt-2 alert alert-danger'
		return
	}

	let first = 0
	let second = 1

	for (let i = 1; i <= n; i++) {
		if (i === 1) {
			resultStr += '1, '
			sum += second
			continue
		}

		let next = first + second
		sum += next

		resultStr += i < n ? `${next}, ` : `${next}`
		first = second
		second = next
	}

	document.getElementById(
		'ans_C4'
	).innerHTML = `Числа Фибоначчи: ${resultStr}.<br>Сумма: ${sum}.`
	document.getElementById('ans_C4').className = 'mt-2'
}

function С5() {
  let count = 0;
  for (let i = 0; i < 1000000; i++) {
    let numStr = i.toString().padStart(6, '0');
    let firstHalfSum = numStr.substr(0, 3).split('').reduce((a, b) => a + parseInt(b), 0);
    let secondHalfSum = numStr.substr(3, 3).split('').reduce((a, b) => a + parseInt(b), 0);
    if (firstHalfSum === secondHalfSum) {
      count++;
    }
  }
  document.getElementById('ans_C5').textContent = `Количество счастливых билетов: ${count}`;
}

function С6() {
  let divisibleBy2or3 = 0;
  let divisibleBy3and5and7 = 0;
  let evenDigitsSum = 0;
  let hasRepeatingDigits = 0;

  for (let i = 10; i <= 1000; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      divisibleBy2or3++;
    }
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      divisibleBy3and5and7++;
    }
    const sum = i.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    if (sum % 2 === 0) {
      evenDigitsSum++;
    }
    const digits = i.toString().split('');
    const uniqueDigits = new Set(digits);
    if (uniqueDigits.size !== digits.length) {
      hasRepeatingDigits++;
    }
  }

	document.getElementById('ans_C6').innerHTML = `1) ${divisibleBy2or3} <br>
	2) ${divisibleBy3and5and7} <br>
	3) ${evenDigitsSum} <br>
	4) ${hasRepeatingDigits}
	`;
}



function C7() {
	let x = parseInt(document.getElementById('input_C7_x').value)
	let N = parseInt(document.getElementById('input_C7_n').value)

	if (isNaN(x) || isNaN(N)) {
		document.getElementById('ans_C7').innerHTML = 'Пожалуйста, введите корректные значения.'
		document.getElementById('ans_C7').className = 'mt-2 alert alert-danger'
		return
	}
	document.getElementById('ans_C7').className = 'mt-2'
	document.getElementById('ans_C7').innerHTML = `sin(${x},${N}) = ${sinTaylor(x, N)}; sin(${x}) = ${Math.sin(x)} <br>
	cos(${x},${N}) = ${cosTaylor(x, N)}; cos(${x}) = ${Math.cos(x)}`

}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function sinTaylor(x, N) {
  let sinX = 0;
  for (let n = 0; n < N; n++) {
    sinX += ((n % 2 === 0 ? 1 : -1) * Math.pow(x, 2 * n + 1)) / factorial(2 * n + 1);
  }
  return sinX;
}

function cosTaylor(x, N) {
  let cosX = 0;
  for (let n = 0; n < N; n++) {
    cosX += ((n % 2 === 0 ? 1 : -1) * Math.pow(x, 2 * n)) / factorial(2 * n);
  }
  return cosX;
}