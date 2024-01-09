const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let M = 0
let arr = []
rl.on('line', (str) => {
    if (N === 0 && M === 0) {
        [N, M] = str.trim().split(' ').map((ele) => parseInt(ele))
        for (let i = 0; i < N; i ++) {
            arr.push(0)
        }
    } else {
        const [from, to, num] = str.trim().split(' ').map((ele) => parseInt(ele))
        for (let i = from - 1; i < to; i ++) {
            arr[i] = num
        }
        M --
        if (M < 1) rl.close()
    }
}).on('close', () => console.log(...arr))