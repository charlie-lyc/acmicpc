const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

const matrix = []
let count = 5
let maxLength = 0
let result = ''
rl.on('line', (str) => {
    const row = str.trim().split('')
    matrix.push(row)
    count --
    if (count < 1) {
        maxLength = matrix.reduce((acc, ele) => {
            if (acc < ele.length) acc = ele.length
            return acc
        }, 0)
        for (let i = 0; i < maxLength; i ++) {
            for (let j = 0; j < 5; j ++) {
                if (matrix[j][i] !== undefined) {
                    result += matrix[j][i]
                }
            }
        }
        rl.close()
    }
}).on('close', () => console.log(result))