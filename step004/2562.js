const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let arr = []
let max
rl.on('line', (str) => {
    const num = parseInt(str.trim())
    if (num) arr.push(num)
    if (arr.length === 9) {
        max = Math.max(...arr)
        rl.close()
    }
}).on('close', () => {
    console.log(max)
    console.log(arr.indexOf(max) + 1)
})