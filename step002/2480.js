const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    const nums = str.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
    const [num1, num2, num3] = nums
    if (num1 === num2 && num2 === num3) {
        console.log(10000 + num1 * 1000)
    } else if (num1 === num2) {
        console.log(1000 + num1 * 100)
    } else if (num2 === num3) {
        console.log(1000 + num2 * 100)
    } else if (num1 === num3) {
        console.log(1000 + num1 * 100)
    } else {
        console.log(Math.max(...nums) * 100)
    }
    rl.close()
})