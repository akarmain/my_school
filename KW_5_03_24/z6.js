const readline = require('readline-sync');
const s = readline.question("Введите два числа через пробел: \n").split(" ");

const a = parseInt(s[0]);
const b = parseInt(s[1]);
let maxAb = (a + b + Math.abs(a - b)) / 2;
let minAb = (a + b - Math.abs(a - b)) / 2;

console.log(`Максимум: ${maxAb}, Минимум: ${minAb}`);