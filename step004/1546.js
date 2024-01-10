const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let N = 0
let total = 0
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        const arr = str.trim().split(' ').map((ele) => parseInt(ele))
        if (arr.length !== N) rl.close()
        const max = Math.max(...arr)
        for (let i = 0; i < arr.length; i ++) {
            total += arr[i] / max * 100
        }
        rl.close()
    }
}).on('close', () => console.log(total/N))