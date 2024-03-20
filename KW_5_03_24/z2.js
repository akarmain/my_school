const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let [a, b, c] = "3, 4, 5".split(", ").map(Number); 
let p = a + b + c;
let s = p / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

let R = (a * b * c) / (4 * area);
let r = area / s;

console.log(`P=${p}, S=${area.toFixed(3)}, R=${R.toFixed(3)}, 2r=${(2*r).toFixed(3)}`);