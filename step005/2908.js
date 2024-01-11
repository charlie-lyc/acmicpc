const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result
rl.on('line', (str) => {
    const [n1, n2] = str.trim().split(' ')
    const num1 = parseInt(n1.split('').reverse().join(''))
    const num2 = parseInt(n2.split('').reverse().join(''))
    if (num1 > num2) result = num1
    else result = num2
    rl.close()
}).on('close', () => console.log(result))