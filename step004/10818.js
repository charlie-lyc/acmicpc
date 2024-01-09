const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let arr = []
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        arr = str.trim().split(' ').map((ele) => parseInt(ele))
        if (arr.length !== N) rl.close()
        console.log(Math.min(...arr), Math.max(...arr))
        rl.close()
    }
})