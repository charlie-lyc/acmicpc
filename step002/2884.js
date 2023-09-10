const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    let splitted = str.trim().split(' ')
    splitted = splitted.filter((ele) => ele !== '')
    const [H, M] = splitted.map((ele) => parseInt(ele))
    let minutes
    if (H === 0) {
        minutes = 24 * 60 + M - 45
    } else {
        minutes = H * 60 + M - 45
    }
    console.log(Math.floor(minutes / 60) % 24, minutes % 60)
    rl.close()
})