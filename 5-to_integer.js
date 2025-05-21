const arg = process.argv[2];
const num = Number.parseInt(arg, 10);

if (!Number.isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log('Not a number');
}