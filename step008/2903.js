const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result
rl.on('line', (str) => {
    const N = parseInt(str.trim())
    result = Math.pow(2 * N + 1, 2)
    rl.close()
}).on('close', () => console.log(result))