const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let arr = []
let v = ''
let result
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        if (arr.length === 0) {
            arr = str.trim().split(' ').filter((ele) => ele !== '')
            if (arr.length !== N) rl.close()
        } else {
            v = str.trim()
            if (v === '') rl.close()
            result = arr.filter((ele) => ele === v).length
            rl.close()
        }
    }
}).on('close', () => console.log(result))