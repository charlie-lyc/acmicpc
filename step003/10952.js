const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (str) => {
    const [A, B] = str.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
    console.log(A + B)
})