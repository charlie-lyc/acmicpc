const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = ''
rl.on('line', (str) => {
    let [N, B] = str.trim().split(' ').map((ele) => parseInt(ele))
    const arr = []
    while (N > B-1) {
        const remainder = N % B
        arr.push(remainder)
        N = Math.floor(N / B)
    }
    arr.push(N)
    arr.reverse().forEach((ele) => {
        if (ele < 10) {
            result += Number(ele).toString()
        } else {
            result += String.fromCharCode(ele + 55)
        }
    })
    rl.close()
}).on('close', () => console.log(result))