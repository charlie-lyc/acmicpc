const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    let trimmed = str.trim()
    console.log(trimmed + '??!')
    rl.close()
})