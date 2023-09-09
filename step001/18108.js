const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    let trimmed = str.trim()
    console.log(parseInt(trimmed) - 543)
    rl.close()
})