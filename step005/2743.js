const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let S = ''
rl.on('line', (str) => {
    S = str.trim()
    rl.close()
}).on('close', () => console.log(S.length))