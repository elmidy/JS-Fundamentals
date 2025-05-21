function add(a, b) {
    return a + b;
}
// This script takes two command line arguments, converts them to numbers, and adds them together.
const arg1 = process.argv[0];
const arg2 = process.argv[1];
const num1 = Number.parseInt(arg1, 10);
const num2 = Number.parseInt(arg2, 10);
// If either argument is not a number, it prints 'NaN'.
// Otherwise, it prints the sum of the two numbers.
if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log('NaN');
} else {
    console.log(add(num1, num2));
}