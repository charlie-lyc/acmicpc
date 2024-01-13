const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let count = 9
const matrix = []
let max = -1
let coord = []
rl.on('line', (str) => {
    const row = str.trim().split(' ').map((ele) => parseInt(ele))
    matrix.push(row)
    count --
    if (count < 1) {
        for (let i = 0; i < 9;i ++) {
            for(let j = 0;j < 9;j ++) {
                if (matrix[i][j] > max) {
                    max = matrix[i][j]
                    coord = [i+1, j+1]
                }
            }
        }
        rl.close()
    }
}).on('close', () => {
    console.log(max)
    console.log(...coord)
})