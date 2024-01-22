const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N, K
const result = []
rl.on('line', (str) => {
    [N, K] = str.trim().split(' ').map((ele) => parseInt(ele))
    for (let i = 1; i < N + 1; i ++) {
        if (N % i === 0) result.push(i)
    }
    rl.close()
}).on('close', () => {
    if (result[K-1] !== undefined) {
        console.log(result[K-1])
    } else {
        console.log(0)
    }
})