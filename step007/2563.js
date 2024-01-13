const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let num = 0
const matrix = []
let result = 0
rl.on('line', (str) => {
    if (num === 0) {
        num = parseInt(str.trim())
        for (let i = 0; i < 100; i ++) {
            const row = []
            for (let j = 0; j < 100;j ++) {
                row.push(0)
            }
            matrix.push(row)
        }
    } else {
        const [x, y] = str.trim().split(' ').map((ele) => parseInt(ele))
        for (let i = y; i < y+10; i ++) {
            for (let j = x; j < x+10;j ++) {
                matrix[i][j] = 1
            }
        }
        num --
        if (num < 1) {
            for (let i = 0; i < 100; i ++) {
                for (let j = 0; j < 100;j ++) {
                    result += matrix[i][j]
                }
            }
            rl.close()
        }
    }
}).on('close', () => console.log(result))