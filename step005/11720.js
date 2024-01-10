const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let result
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        const arr = str.trim().split('').map((ele) => parseInt(ele))
        result = arr.reduce((acc, ele) => acc + ele, 0)
        rl.close()
    }
}).on('close', () => console.log(result))