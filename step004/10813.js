const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let N = 0
let M = 0
let arr = []
rl.on('line', (str) => {
    if (N === 0 && M === 0) {
        [N, M] = str.trim().split(' ').map((ele) => parseInt(ele))
        for (let i = 0; i < N; i ++) {
            arr.push(i + 1)
        }
    } else {
        const [num1, num2] = str.trim().split(' ').map((ele) => parseInt(ele))
        const temp = arr[num1 - 1]
        arr[num1 - 1] = arr[num2 -1]
        arr[num2 - 1] = temp
        M --
        if (M < 1) rl.close()
    }
}).on('close', () => console.log(...arr))