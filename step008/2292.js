const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let number = 1
let roomToPass = 1
rl.on('line', (str) => {
    N = parseInt(str.trim())
    while (true) {
        if (number >= N) break
        number += 6 * roomToPass
        roomToPass ++
    }
    rl.close()
}).on('close', () => console.log(roomToPass))