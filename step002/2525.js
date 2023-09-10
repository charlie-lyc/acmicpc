const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str1) => {
    let splitted = str1.trim().split(' ')
    splitted = splitted.filter((ele) => ele !== '')
    const [A, B] = splitted.map((ele) => parseInt(ele))
    rl.question('', (str2) => {
        const C = parseInt(str2.trim())
        const minutes = A * 60 + B + C
        console.log(Math.floor(minutes / 60) % 24, minutes % 60)
        rl.close()
    })
})