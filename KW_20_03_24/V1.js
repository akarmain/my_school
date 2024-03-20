const readline = require('readline-sync');
const s = readline.question("(1, 2,").split(",");
const a = parseInt(s[0]);
const b = parseInt(s[1]);
const c = parseInt(s[2]);

const numbers = [a, b, c];
if (a === b && b === c) {
    console.log("Числа равны");
} else {
    const max_num = Math.max(...numbers);
    const min_num = Math.min(...numbers);
    let avg_num;
    if (a !== max_num && a !== min_num) {
        avg_num = a;
    } else if (b !== max_num && b !== min_num) {
        avg_num = b;
    } else {
        avg_num = c;
    }
    const equal_count = numbers.filter(num => num === a).length - 1 + numbers.filter(num => num === b).length - 1 + numbers.filter(num => num === c).length - 1;
    console.log(`Максимум - ${max_num}, Минимум - ${min_num}, Среднее - ${equal_count > 0 ? 'Его нет' : avg_num}, Одинаковых - ${equal_count}`);
}