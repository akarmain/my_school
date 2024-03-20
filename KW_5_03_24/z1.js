const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Введите четырёхзначное число: ", number => {
  number = parseInt(number, 10);
  let thousands = Math.floor(number / 1000);
  let hundreds = Math.floor((number % 1000) / 100);
  let tens = Math.floor((number % 100) / 10);
  let ones = number % 10;
  let sumDigits = thousands + hundreds + tens + ones;
  let productDigits = thousands * hundreds * tens * ones;
  let reverseNumber = ones * 1000 + tens * 100 + hundreds * 10 + thousands;
  console.log(`${thousands} тысяча, ${hundreds} сотен, ${tens} десятка, ${ones} единиц,\nСумма цифр = ${sumDigits}, произведение = ${productDigits}, число-перевертыш ${reverseNumber}.`);
  readline.close();
});


function get_ans_z1() {
  var inputValue = document.getElementById('myInput').value;
  console.log(inputValue); // Выводит 
}