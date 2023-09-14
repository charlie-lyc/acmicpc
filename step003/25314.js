const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    const N = parseInt(str.trim()) / 4
    let result = 'int'
    for (let i = 0; i < N; i ++) {
        result = 'long ' + result
    }
    console.log(result);
    rl.close()
})