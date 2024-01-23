const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0
rl.on('line', (str) => {
    n = parseInt(str.trim())
}).on('close', () => console.log(n * 4))