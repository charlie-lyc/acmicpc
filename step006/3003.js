const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const pieces = [1, 1, 2, 2, 2, 8]
const result = []
rl.on('line', (str) => {
    const whitePieces = str.trim().split(' ').map((ele) => parseInt(ele))
    for (let i = 0; i < pieces.length; i ++) {
        result.push(pieces[i] - whitePieces[i])
    }
    rl.close()
}).on('close', () => console.log(...result))