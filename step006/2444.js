const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (str) => {
    const N = parseInt(str.trim())
    for (let i = 0; i < N; i ++) {
        let row = ''
        for (let j = 0; j < N - i - 1; j ++) {
            row += ' '
        }
        for (let j = 0; j < i + 1; j ++) {
            row += '*'
        }
        for (let j = 0; j < i; j ++) {
            row += '*'
        }
        console.log(row)
    }
    for (let i = 0; i < N; i ++) {
        let row = ''
        for (let j = 0; j < i + 1; j ++) {
            row += ' '
        }
        for (let j = 0; j < N - i - 2; j ++) {
            row += '*'
        }
        for (let j = 0; j < N - i - 1; j ++) {
            row += '*'
        }
        console.log(row)
    }
    rl.close() 
})