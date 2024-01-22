const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let A = 0
let B = 0
rl.on('line', (str) => {
    if (A === 0 && B === 0) {
        A = parseInt(str.trim())
    } else if (A !== 0 && B === 0) {
        B = parseInt(str.trim())
    } else {
        rl.close()
    }
}).on('close', () => console.log(A * B))