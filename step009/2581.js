const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let M = 0
let N = 0
const result = []
rl.on('line', (str) => {
    if (M === 0 && N === 0) {
        M = parseInt(str.trim())
    } else if (M !== 0 && N === 0) {
        N = parseInt(str.trim())
        for (let i = M; i < N + 1; i ++) {
            if (i === 1) {
                continue
            } else {
                let isPrime = true
                for (let j = 2; j < Math.floor(i/2) + 1; j ++) {
                    if (i % j === 0) {
                        isPrime = false
                        break
                    }
                }
                if (isPrime) result.push(i)
            }
        }
        rl.close()
    }
}).on('close', () => {
    if (result.length === 0) {
        console.log(-1)
    } else {
        console.log(result.reduce((acc, ele) => acc + ele, 0))
        console.log(Math.min(...result))
    }
})