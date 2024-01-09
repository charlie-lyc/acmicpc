const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let N = 0
let X = 0
let arr = []
let result
rl.on('line', (str) => {
    if (N === 0 && X === 0) {
        [N, X] = str.trim().split(' ').map((ele) => parseInt(ele))
    } else {
        arr = str.trim().split(' ').map((ele) => parseInt(ele))
        if (arr.length !== N) rl.close()
        result = arr.filter((ele) => ele < X)
        rl.close()
    }
}).on('close', () => console.log(...result))