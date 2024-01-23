const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0
rl.on('line', (str) => {
    n = parseInt(str.trim())
    rl.close()
}).on('close', () => {
    console.log(n)
    console.log(1)
})