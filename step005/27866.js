const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let S = ''
let i = 0
rl.on('line', (str) => {
    if (S === '') {
        S = str.trim()
    } else {
        i = parseInt(str.trim())
        rl.close()
    }
}).on('close', () => console.log(S[i-1]))