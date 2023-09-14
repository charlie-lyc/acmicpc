const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('', (str) => {
    const n = parseInt(str.trim())
    let sum = 0
    for (let i = 1; i < n + 1; i ++) {
        sum += i
    }
    console.log(sum)
    rl.close()
})