const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let M = 0
rl.on('line', (str) => {
    if (N === 0 && M === 0) {
        [N, M] = str.trim().split(' ').map((ele) => parseInt(ele))
    } else {
        
        rl.close()
    }
}).on('close', () => console.log())