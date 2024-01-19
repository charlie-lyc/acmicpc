const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let A = 0
let B = 0
let V = 0
let lastPosition = 0
let days = 0
rl.on('line', (str) => {
    [A, B, V] = str.trim().split(' ').map((ele) => parseInt(ele))
    lastPosition = V - A
    days ++
    days = days + Math.ceil(lastPosition / (A - B))
    rl.close()
}).on('close', () => console.log(days))