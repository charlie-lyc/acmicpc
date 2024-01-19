const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (str) => {
    let [num1, num2] = str.trim().split(' ').map((ele) => parseInt(ele))
    if (num1 === 0 && num2 === 0) {
        rl.close()
    } else if (num1 % num2 === 0) {
        console.log('multiple')
    } else if (num2 % num1 === 0) {
        console.log('factor')
    } else {
        console.log('neither')
    }
})