const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let N = 0
let M = 0
let count = 0
const matrix1 = []
const matrix2 = []
const result = []
rl.on('line', (str) => {
    if (N === 0 && M === 0) {
        [N, M] = str.trim().split(' ').map((ele) => parseInt(ele))
        count = 2 * N
        for (let i = 0; i < N; i ++) {
            const arr = []
            for (let j = 0; j < M; j ++) {
                arr.push(0)
            }
            result.push(arr)
        }
    } else {
        const row = str.trim().split(' ').map((ele) => parseInt(ele))
        if (count > N) {
            matrix1.push(row)
        } else {
            matrix2.push(row)
        }
        count --
        if (count < 1) {
            for (let i = 0; i < N; i ++) {
                for (let j = 0; j < M; j ++) {
                    result[i][j] = matrix1[i][j] + matrix2[i][j]
                }
            }
            rl.close()
        }
    }
}).on('close', () => {
    for (let i = 0; i < N; i ++) {
        console.log(...result[i])
    }
})