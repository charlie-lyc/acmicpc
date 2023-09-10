const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str) => {
    const N = parseInt(str.trim())
    for (let i = 1; i < 10; i ++) {
        console.log(`${N} * ${i} = ${N * i}`)
    }
    rl.close()
})