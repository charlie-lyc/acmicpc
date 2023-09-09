const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    let splitted = str.trim().split(' ')
    splitted = splitted.filter((ele) => ele !== '')
    const [A, B] = splitted.map((ele) => parseInt(ele))
    console.log(A + B)
    rl.close()
})