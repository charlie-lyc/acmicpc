const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    let year = parseInt(str.trim())
    let isLeapYear = 0
    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            isLeapYear = 1
        }
    }
    console.log(isLeapYear)
    rl.close()
})