function Z1() {
	const x = parseInt(document.getElementById('input_Z1_x').value)

	if (!isNaN(x) && x >= 1000 && x <= 9999) {
		const thousands = Math.floor(x / 1000)
		const hundreds = Math.floor((x % 1000) / 100)
		const tens = Math.floor((x % 100) / 10)
		const ones = x % 10

		const sum = thousands + hundreds + tens + ones
		const product = thousands * hundreds * tens * ones

		const reverse = ones * 1000 + tens * 100 + hundreds * 10 + thousands

		const answer =
			`${thousands} тысяча, ${hundreds} сотен, ${tens} десятка, ${ones} единиц, ` +
			`Сумма цифр = ${sum}, произведение = ${product}, число-перевертыш ${reverse}.`

		document.getElementById('ans_Z1').innerHTML = answer
		document.getElementById('ans_Z1').className = 'mt-2'
	} else {
		document.getElementById('ans_Z1').innerHTML =
			'Введите четырёхзначное число.'
		document.getElementById('ans_Z1').className = 'mt-2 alert alert-danger'
	}
}

function Z2() {
	const a = parseFloat(document.getElementById('input_Z2_a').value);
	const b = parseFloat(document.getElementById('input_Z2_b').value);
	const c = parseFloat(document.getElementById('input_Z2_c').value);

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
			document.getElementById('ans_Z2').innerHTML = 'Введите корректные стороны треугольника.';
			document.getElementById('ans_Z2').className = 'mt-2 alert alert-danger';
			return;
	}
	const P = a + b + c;
	const p = P / 2;
	const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
	const r = S / p;
	const R = (a * b * c) / (4 * S);
	
	const angleA = Math.acos((b*b + c*c - a*a) / (2 * b * c));
	const angleB = Math.acos((a*a + c*c - b*b) / (2 * a * c));
	const angleC = Math.PI - angleA - angleB;
	
	const angleADeg = angleA * (180 / Math.PI);
	const angleBDeg = angleB * (180 / Math.PI);
	const angleCDeg = angleC * (180 / Math.PI);
	
	const answer = `P=${P.toFixed(3)}, <br> S=${S.toFixed(3)}, <br>
									R=${R.toFixed(3)}, <br> r=${r.toFixed(3)}, <br>
									A=${angleADeg.toFixed(3)}° (${toDegreesMinutes(angleADeg)}), <br>
									B=${angleBDeg.toFixed(3)}° (${toDegreesMinutes(angleBDeg)}), <br>
									C=${angleCDeg.toFixed(3)}° (${toDegreesMinutes(angleCDeg)})`;
	
	document.getElementById('ans_Z2').innerHTML = answer;
	document.getElementById('ans_Z2').className = 'mt-2';
}

function toDegreesMinutes(angle) {
	const degrees = Math.floor(angle);
	const minutes = Math.floor((angle - degrees) * 60);
	return `${degrees}°${minutes}'`;
}


function Z3() {
  const v = parseFloat(document.getElementById('input_Z3_v').value);
  const s = parseFloat(document.getElementById('input_Z3_s').value);

  if (isNaN(v) || isNaN(s)) {
    document.getElementById('ans_Z3').innerHTML = 'Введите корректные значения скорости и расстояния.';
    document.getElementById('ans_Z3').className = 'mt-2 alert alert-danger';
    return;
  }

	const distanceInKm = s * 150e6; 
  const timeInSeconds = distanceInKm / v;
  
  const timeInDays = timeInSeconds / (24 * 3600);
  const years = Math.floor(timeInDays / 365);
  let remainingDays = timeInDays % 365;
  const months = Math.floor(remainingDays / 30);
  remainingDays = Math.floor(remainingDays % 30); 
  
  const answer = `${years} года, ${months} месяцев, ${remainingDays} суток`;
  document.getElementById('ans_Z3').innerHTML = answer;
  document.getElementById('ans_Z3').className = 'mt-2';
}

function Z41() {
  const angle = parseFloat(document.getElementById('input_Z41_x').value);
  
  if (isNaN(angle) || angle < 0 || angle > 360) {
    document.getElementById('ans_Z41').innerHTML = 'Введите корректный угол от 0 до 360 градусов.';
    document.getElementById('ans_Z41').className = 'mt-2 alert alert-danger';
    return;
  }
  
  const totalMinutes = angle * 2; 
  const hours = Math.floor(totalMinutes / 60); 
  const minutes = Math.floor(totalMinutes % 60);

  document.getElementById('ans_Z41').innerHTML = `С начала суток прошло: ${hours} ч. ${minutes} мин.`;
  document.getElementById('ans_Z41').className = 'mt-2';
}

function Z42() {
  const hours = parseInt(document.getElementById('input_Z42_h').value, 10);
  const minutes = parseInt(document.getElementById('input_Z42_m').value, 10);

  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
    document.getElementById('ans_Z42').innerHTML = 'Пожалуйста, введите корректное время.';
    document.getElementById('ans_Z42').className = 'mt-2 alert alert-danger';
    return;
  }

  const normalizedHours = hours % 12;
  const angle = (normalizedHours * 30) + (minutes * 0.5);

	document.getElementById('ans_Z42').innerHTML = `Ответ: ${angle}°`;
  document.getElementById('ans_Z42').className = 'mt-2';
}



function Z5() {
  const v = parseInt(document.getElementById('input_Z5_v').value, 10); 
  const t = parseInt(document.getElementById('input_Z5_t').value, 10);

  if (isNaN(v) || isNaN(t)) {
    document.getElementById('ans_Z5').innerHTML = 'Пожалуйста, введите валидные значения скорости и времени.';
    document.getElementById('ans_Z5').className = 'mt-2 alert alert-danger';
    return;
  }

  const mkadLength = 109; 
	let position = (v * t) % mkadLength;

  if (position < 0) {
    position += mkadLength;
  }
  document.getElementById('ans_Z5').innerHTML = `Байкер Вася остановится на ${position} километре МКАД.`;
  document.getElementById('ans_Z5').className = 'mt-2';
}


function Z6() {
  const a = parseFloat(document.getElementById('input_Z6_a').value);
  const b = parseFloat(document.getElementById('input_Z6_b').value);
  const c = parseFloat(document.getElementById('input_Z6_c').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('ans_Z6').innerHTML = 'Пожалуйста, введите валидные числа.';
    document.getElementById('ans_Z6').className = 'mt-2 alert alert-danger';
    return;
  }

  const nums = [a, b, c];

  nums.sort((x, y) => x - y);

  const min = nums[0];
  const max = nums[nums.length - 1];

  document.getElementById('ans_Z6').innerHTML = `Минимум: ${min}, Максимум: ${max}`;
  document.getElementById('ans_Z6').className = 'mt-2';
}