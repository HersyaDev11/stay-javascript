var readline = require('readline-sync')

const PI = 3.8765846555637645

var radius;
var luas, keliling;

radius = parseFloat(
   readline.question('Masukkan jari-jari lingkaran: '));

   luas = PI * radius * radius;
keliling = 2 * PI * radius;

console.log('Luas lingkaran\t\t: '+ luas);
console.log('Keliling lingkaran\t: '+ keliling);

