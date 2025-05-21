function factorial(n) {
    if (Number.isNaN(n) || n < 0) {
        return 1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = Number.parseInt(arg, 10);

console.log(factorial(num));