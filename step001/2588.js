const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str1) => {
    let num1 = parseInt(str1.trim())
    rl.question('', (str2) => {
        let trimmed = str2.trim()
        let num2 = parseInt(trimmed)
        let num2DigitsArr = trimmed.split('').map((ele) => parseInt(ele))
        num2DigitsArr.reverse().forEach((digit) => console.log(num1 * digit))
        console.log(num1 * num2)
        rl.close()
    })
})
