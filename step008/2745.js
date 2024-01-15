const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0
rl.on('line', (str) => {
    let [N, B] = str.trim().split(' ')
    B = parseInt(B)
    N.split('').reverse().forEach((ele, idx) => {
        if (isNaN(ele)) {
            result += ((ele.charCodeAt(0) % 65) + 10) * Math.pow(B, idx)
        } else {
            result += parseInt(ele) * Math.pow(B, idx)
        } 
    })
    rl.close()
}).on('close', () => console.log(result))