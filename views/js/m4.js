let secretNumber
let attempts = 0
let gameActive = false
let lowD32, highD32, currentGuessD32, totalGuessesD32

function calculateGCD(x, y) {
	while (y !== 0) {
		let temp = y
		y = x % y
		x = temp
	}
	return x
}

function calculateLCM(x, y) {
	return x * (y / calculateGCD(x, y))
}

function D1() {
	const a = parseFloat(document.getElementById('input_D1_a').value)
	const b = parseFloat(document.getElementById('input_D1_b').value)
	const c = parseFloat(document.getElementById('input_D1_c').value)

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.getElementById('ans_D1').innerText =
			'Пожалуйста, введите все три числа.'
		document.getElementById('ans_D1').className = 'mt-2 alert alert-danger'
		return
	}

	const gcdAB = calculateGCD(a, b)
	const gcdABC = calculateGCD(gcdAB, c)

	const lcmAB = calculateLCM(a, b)
	const lcmABC = calculateLCM(lcmAB, c)

	let resultString = `НОД: ${gcdABC}, НОК: ${lcmABC}`

	document.getElementById('ans_D1').innerText = resultString
	document.getElementById('ans_D1').className = 'mt-2'
}

function D11() {
	const numerator = parseInt(document.getElementById('numerator').value)
	const denominator = parseInt(document.getElementById('denominator').value)

	if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
		document.getElementById('ans_D11').innerText =
			'Введите корректные числитель и знаменатель, знаменатель не должен быть нулём.'
		document.getElementById('ans_D11').className = 'mt-2 alert alert-danger'
		return
	}

	const gcd = calculateGCD(numerator, denominator)
	let reducedNumerator = numerator / gcd
	let reducedDenominator = denominator / gcd
	let sign = reducedNumerator / reducedDenominator < 0 ? '-' : ''
	reducedNumerator = Math.abs(reducedNumerator)
	reducedDenominator = Math.abs(reducedDenominator)

	let integerPart = Math.floor(reducedNumerator / reducedDenominator)
	let fractionPartNumerator = reducedNumerator % reducedDenominator

	let result
	if (fractionPartNumerator === 0) {
		result = `${sign}${integerPart}`
	} else {
		if (integerPart === 0) {
			result = `${sign}${fractionPartNumerator}/${reducedDenominator}`
		} else {
			result = `${sign}${integerPart} ${fractionPartNumerator}/${reducedDenominator}`
		}
	}

	document.getElementById('ans_D11').innerText = `Сокращенная дробь: ${result}`
	document.getElementById('ans_D11').className = 'mt-2'
}

function D2() {
	const S = parseFloat(document.getElementById('initialDeposit').value),
		N = parseFloat(document.getElementById('multiplier').value),
		p = parseFloat(document.getElementById('interestRate').value)

	if (isNaN(S) || isNaN(N) || isNaN(p) || S <= 0 || N <= 1 || p <= 0) {
		document.getElementById('ans_D2').innerText =
			'Введите положительные числа для S, N (N > 1) и P.'
		document.getElementById('ans_D2').className = 'mt-2 alert alert-danger'
		return
	}

	let t = 0
	let futureValue = S

	while (futureValue < S * N) {
		futureValue *= 1 + p / 100
		t++
	}

	let interestPayments = futureValue - S
	document.getElementById(
		'ans_D2'
	).innerText = `Вклад увеличится в ${N} раз через ${t} лет, итоговая выплата составит ${futureValue.toFixed(
		2
	)}, выплата по процентам составит ${interestPayments.toFixed(2)}.`
	document.getElementById('ans_D2').className = 'mt-2'
}

function D31startGame() {
	let maxNumberInput = document.getElementById('maxNumber')
	let maxNumber = parseInt(maxNumberInput.value)
	if (isNaN(maxNumber) || maxNumber < 1) {
		document.getElementById('ans_D31').innerText =
			'Введите корректное значение для N (целое число больше 0).'
		document.getElementById('ans_D31').className = 'mt-2 alert alert-danger'
		maxNumberInput.focus()
		return
	}
	secretNumber = Math.floor(Math.random() * (maxNumber + 1))
	attempts = 0
	gameActive = true
	document.getElementById('ans_D31').innerText = ''
	document.getElementById('gameResult').style.display = 'none'
	document.getElementById('userGuess').focus()
}

function D31makeGuess() {
	if (!gameActive) {
		document.getElementById('ans_D31').innerText = 'Сначала начните игру.'
		document.getElementById('ans_D31').className = 'mt-2 alert alert-danger'
		return
	}
	let userGuessInput = document.getElementById('userGuess')
	let userGuess = parseInt(userGuessInput.value)
	if (isNaN(userGuess)) {
		document.getElementById('ans_D31').innerText =
			'Вводите только числовые значения.'
		document.getElementById('ans_D31').className = 'mt-2 alert alert-danger'
		userGuessInput.focus()
		return
	}

	attempts++
	if (userGuess < secretNumber) {
		setResult('⬆️  Загаданное число больше введенного.', 'warning')
	} else if (userGuess > secretNumber) {
		setResult('⬇️  Загаданное число меньше введенного.', 'warning')
	} else {
		setResult(`Вы угадали загаданное число с ${attempts} попыток.`, 'success')
		gameActive = false
	}
}

function setResult(message, type) {
	let resultElement = document.getElementById('gameResult')
	resultElement.className = `alert alert-${type}`
	resultElement.style.display = 'block'
	resultElement.innerText = message
	document.getElementById('ans_D31').innerText = ''
}

document
	.getElementById('maxNumber')
	.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			startGame()
		}
	})
document
	.getElementById('userGuess')
	.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			makeGuess()
		}
	})

function startD32() {
	let maxNumber = parseInt(document.getElementById('input_D32_N').value)
	if (isNaN(maxNumber) || maxNumber < 1) {
		alert('Введите корректное значение для N (целое число больше 0).')
		return
	}
	lowD32 = 0
	highD32 = maxNumber
	totalGuessesD32 = 0
	makeGuessD32()
	document.getElementById('gameControlsD32').style.display = 'block'
	document.getElementById('gameResultD32').style.display = 'none'
	document.getElementById('gamePromptD32').innerText =
		'Игра начата. Угадываю...'
}

function makeGuessD32() {
	currentGuessD32 = Math.floor((lowD32 + highD32) / 2)
	totalGuessesD32++
	document.getElementById(
		'gamePromptD32'
	).innerText = `Ваше число ${currentGuessD32}?`
}

function checkGuessD32(response) {
	if (response === 'greater') {
		lowD32 = currentGuessD32 + 1
	} else if (response === 'less') {
		highD32 = currentGuessD32 - 1
	} else if (response === 'equal') {
		document.getElementById(
			'gameResultD32'
		).innerText = `Компьютер угадал ваше число ${currentGuessD32} за ${totalGuessesD32} попыток.`
		document.getElementById('gameControlsD32').style.display = 'none'
		document.getElementById('gameResultD32').style.display = 'block'
		document.getElementById('gameResultD32').className =
			'alert alert-success mt-2'
		return
	}
	makeGuessD32()
}

function D41() {
	const input = document.getElementById('input_D41_number').value
	const number = parseInt(input)
	if (isNaN(number)) {
		document.getElementById('output_D41').innerText =
			'Пожалуйста, введите корректное целое число.'
		document.getElementById('output_D41').className = 'mt-2 alert alert-danger'
		return
	}

	const binary = number.toString(2)
	const octal = number.toString(8)
	const hexadecimal = number.toString(16).toUpperCase()

	const result = `Бинарный формат: ${binary}\nВосьмеричный формат: ${octal}\nШестнадцатеричный формат: ${hexadecimal}`
	document.getElementById('output_D41').innerText = result
	document.getElementById('output_D41').className = 'mt-2'
}

function D42convertFractionalNumber() {
	const input = document.getElementById('input_D42_number').value
	const number = parseFloat(input)

	if (isNaN(number)) {
		document.getElementById('output_D42').innerText =
			'Пожалуйста, введите корректное целое число.'
		document.getElementById('output_D42').className = 'mt-2 alert alert-danger'
		return
	}

	const binary = number.toString(2)
	const octal = floatToBase(number, 8)
	const hexadecimal = floatToBase(number, 16)

	const refinedBinary = binary.slice(0, binary.indexOf('.') + 15)
	const refinedOctal = octal.slice(0, octal.indexOf('.') + 15)
	const refinedHexadecimal = hexadecimal.slice(0, hexadecimal.indexOf('.') + 15)

	const result = `Бинарный формат: ${refinedBinary}\nВосьмеричный формат: ${refinedOctal}\nШестнадцатеричный формат: ${refinedHexadecimal}`
	document.getElementById('output_D42').innerText = result
	document.getElementById('output_D42').className = 'mt-2'
}

function floatToBase(num, base) {
	let integerPart = Math.floor(num)
	let fractionalPart = num - integerPart
	let integerResult = integerPart.toString(base)
	let fractionalResult = '.'
	const limit = 14

	while (fractionalResult.length - 1 < limit && fractionalPart !== 0) {
		fractionalPart *= base
		let currentDigit = Math.floor(fractionalPart)
		fractionalResult += currentDigit.toString(base)
		fractionalPart -= currentDigit
	}

	return (integerResult + fractionalResult).toUpperCase()
}


function D5countDigits() {
	const input = document.getElementById('input_D5_number').value;
	const number = parseInt(input);
	if (isNaN(number)) {

			document.getElementById('output_D5').innerText =
				'Пожалуйста, введите корректное целое число.'
			document.getElementById('output_D5').className = 'mt-2 alert alert-danger'
			return;
	}
	document.getElementById('output_D5').className = 'mt-2'
	const numberStr = number.toString();
	const numDigits = numberStr.length;
	const outputDiv = document.getElementById('output_D5');
	outputDiv.innerHTML = '';
	const result = document.createElement('div');
	result.innerText = `Число ${numberStr} состоит из ${numDigits} цифр:`;
	outputDiv.appendChild(result);
	numberStr.split('').forEach((digit, index) => {
			const digitDiv = document.createElement('div');
			digitDiv.innerText = `Цифра ${digit} находится на позиции ${index + 1}`;
			outputDiv.appendChild(digitDiv);
	});
}


function calculateGCD(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function calculateLCM(x, y) {
  return x * (y / calculateGCD(x, y));
}

function calculateGCDLCM() {
  const a = parseFloat(document.getElementById('input_D1_a').value);
  const b = parseFloat(document.getElementById('input_D1_b').value);
  const c = parseFloat(document.getElementById('input_D1_c').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('ans_D1').innerText = 'Пожалуйста, введите все три числа.';
    document.getElementById('ans_D1').className = 'mt-2 alert alert-danger';
    return;
  }

  const gcdAB = calculateGCD(a, b);
  const gcdABC = calculateGCD(gcdAB, c);
  
  const lcmAB = calculateLCM(a, b);
  const lcmABC = calculateLCM(lcmAB, c);

  let resultString = `НОД: ${gcdABC}, НОК: ${lcmABC}`;
  
  document.getElementById('ans_D1').innerText = resultString;
  document.getElementById('ans_D1').className = 'mt-2 alert alert-success';
}



function D6() {
  const n = parseInt(document.getElementById('input_D1').value);
  const ansLabel = document.getElementById('ans_D6');
	console.log(n)
  if (isNaN(n) || n < 1) {
    ansLabel.textContent = 'Пожалуйста, введите корректное натуральное число.';
    ansLabel.className = 'mt-2 alert alert-danger'
    return;
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  if (primes.length) {
    const primesText = primes.map((prime, index) => `P${index + 1}=${prime}`).join(', ');
    ansLabel.textContent = `Простых чисел: ${primes.length}. ${primesText}`;
  } else {
    ansLabel.textContent = 'Простых чисел нет.';
  }
  ansLabel.className = 'mt-2';
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}