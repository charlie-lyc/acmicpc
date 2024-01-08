const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let arr = []
rl.on('line', (str) => {
    const num = parseInt(str.trim())
    if (num) arr.push(num)
    if (arr.length === 9) {
        const max = Math.max(...arr)
        console.log(max)
        console.log(arr.indexOf(max) + 1)
        rl.close()
    }
})