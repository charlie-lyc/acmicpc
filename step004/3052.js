const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let arr = []
let count = 0
let result
rl.on('line', (str) => {
    let num = parseInt(str.trim())
    let remain = num % 42
    arr.push(remain)
    count ++
    if (count === 10) {
        result = [...new Set(arr)]
        rl.close()
    }
}).on('close', () => console.log(result.length))