const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0
rl.on('line', (str) => {
    let [a, b, c] = str.trim().split(' ').map((ele) => parseInt(ele))
    let max = Math.max(a, b, c)
    if ((max === a && a < b + c) || (max === b && b < a + c) || (max === c && c < a + b)) {
        result = a + b + c
        rl.close()
    } else {
        for (let i = max - 1; i > 0; i --) {
            if (max === a && i < b + c) {
                result = i + b + c
                break
            } else if (max === b && i < a + c) {
                result = i + a + c
                break
            } else if (max === c && i < a + b) {
                result = i + a + b
                break
            }
        }
        rl.close()
    }
}).on('close', () => console.log(result))