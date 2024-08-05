let colors = require('colors');

const name = process.argv[2];
const profit = process.argv[3];

let profitColor;

if (parseInt(profit) > 0) {
    profitColor = 'bgBrightGreen';
} else {
    profitColor = 'bgBrightRed';
}

console.log(`My name is ${colors.bgBrightYellow(name)} and I made ${colors[profitColor](profit)} this quarter.`);