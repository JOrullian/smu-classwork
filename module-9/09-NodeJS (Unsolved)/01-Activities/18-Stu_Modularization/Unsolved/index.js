// TODO: Import `basicmath.js`
const basicmath = require('./basicmath');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

const operation = process.argv[2];
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
    case 'sum':
        console.log(basicmath.sum(numOne, numTwo));
        break;
    case 'difference':
        console.log(basicmath.difference(numOne, numOne));
        break;
    case 'product':
        console.log(basicmath.product(numOne, numTwo));
        break;
    case 'quotient':
        console.log(basicmath.quotient(numOne, numTwo));
        break;
    default:
        console.log('Verify you have chosen a basic operation.')
}