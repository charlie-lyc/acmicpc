const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let X = 0
let sum = 0
const reAsk = (count) => {
    if (count === 0) {
        if (X === sum) console.log('Yes')
        else console.log('No')
        rl.close()
        return
    }
    rl.question('', (str) => {
        const [a, b] = str.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
        sum += a * b
        reAsk(count - 1)
    })
}

rl.question('', (str1) => {
    X = parseInt(str1.trim())
    rl.question('', (str2) => {
        const N = parseInt(str2.trim())
        reAsk(N)
    })
})


