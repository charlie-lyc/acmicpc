const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0
rl.on('line', (str) => {
    const N = parseInt(str.trim())
    const numSquare = Math.pow(4, N)
    const numSquareRoot = Math.sqrt(numSquare)
    result = Math.pow(numSquareRoot + 1, 2)
    rl.close()
}).on('close', () => console.log(result))