const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let N = 0
let M = 0
let arr = []
rl.on('line', (str) => {
    if (N === 0 && M === 0) {
        [N, M] = str.trim().split(' ').map((ele) => parseInt(ele))
        for (let i = 0; i < N; i ++) {
            arr.push(i + 1)
        }
    } else {
        const [i, j] = str.trim().split(' ').map((ele) => parseInt(ele))
        const sliceAndReverse = arr.slice(i-1, j).reverse()
        const head = arr.slice(0, i-1)
        const tail = arr.slice(j)
        arr = head.concat(sliceAndReverse).concat(tail)
        M --
        if (M < 1) rl.close()
    }
}).on('close', () => console.log(...arr))