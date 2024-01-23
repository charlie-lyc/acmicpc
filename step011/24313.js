const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let a1 = undefined
let a0 = undefined
let c = 0
let n0 = 0
rl.on('line', (str) => {
    if (a1 === undefined && a0 === undefined) {
        [a1, a0] = str.trim().split(' ').map((ele) => parseInt(ele))
    } else {
        if (c === 0) {
            c = parseInt(str.trim())
        } else {
            n0 = parseInt(str.trim())
            rl.close()
        }
    }
}).on('close', () => {
    let result = 1
    for (let i = n0; i < 500001; i ++) {
        if (a1 * i + a0 > c * i) {
            result = 0
            break
        }
    }
    console.log(result)
})