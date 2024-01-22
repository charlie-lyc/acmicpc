const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
const primeFactors = []
rl.on('line', (str) => {
    N = parseInt(str.trim())
    if (N === 1) rl.close()
    let result = N
    for (let i = 2; i < Math.floor(N/2) + 1; i ++) {
        while (result % i === 0) {
            result = result / i
            primeFactors.push(i)
        }
    }
    rl.close() 
}).on('close', () => {
    if (N !== 1 && primeFactors.length === 0) {
        console.log(N)
    } else if (N !== 1 && primeFactors.length !== 0) {
        primeFactors.forEach((ele) => console.log(ele))
    }
})