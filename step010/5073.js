const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (str) => {
    const [num1, num2, num3] = str.trim().split(' ').map((ele) => parseInt(ele))
    if (num1 === 0 && num2 === 0 && num3 === 0) {
        rl.close()
    } else {
        const maxNum = Math.max(num1, num2, num3)
        if ((maxNum === num1 && num1 < num2 + num3) || (maxNum === num2 && num2 < num1 + num3) || (maxNum === num3 && num3 < num1 + num2)) {
            if (num1 === num2 && num2 === num3) {
                console.log('Equilateral')
            } else if (num1 === num2 || num2 === num3 || num1 === num3) {
                console.log('Isosceles')
            } else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
                console.log('Scalene')
            } 
        } else {
            console.log('Invalid')
        }
    }
})