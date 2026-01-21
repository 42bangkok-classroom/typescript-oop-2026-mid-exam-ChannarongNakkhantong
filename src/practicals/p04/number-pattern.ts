const n: number = parseFloat(process.argv[2]);
if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
    console.log("Invalid Input")
} else {

    for (let i = 0; i < n+1; i++) {
        let line = '';
        
        for (let s = 0; s < i; s++) {
          line += ' ';
        }
        for (let j = i; j > 0; j--) {
            line += j;
        }
        console.log(line)
    }
}
