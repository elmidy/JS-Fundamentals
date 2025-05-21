const arg1 = process.argv[2];
const arg2 = process.argv[3];
const num1 = Number.parseInt(arg1, 10);
const num2 = Number.parseInt(arg2, 10);
if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log('NAN');
} else {
    const sum = num1 + num2;
    console.log(sum);
}