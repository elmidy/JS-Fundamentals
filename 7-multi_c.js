const x = process.argv[2];
const times = Number.parseInt(x, 10);

if (Number.isNaN(times)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < times; i++) {
        console.log('C is fun');
    }
}