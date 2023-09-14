const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    const N = parseInt(str.trim())
    for (let i = 0; i < N; i ++) {
        let result = ''
        for (let j = i + 1; j < N; j ++) {
            result += ' '
        }
        for (let j = N - (i + 1); j < N; j ++) {
            result += '*'
        }
        console.log(result)
    }
    rl.close()
})