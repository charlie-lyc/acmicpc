const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (str) => {
    const n = parseInt(str.trim())
    if (n === -1) {
        rl.close()
    } else {
        const factors = []
        for (let i = 1; i < n; i ++) {
            if (n % i === 0) factors.push(i)
        }
        const sum = factors.reduce((acc, ele) => acc + ele, 0)
        if (n === sum) {
            console.log(`${n} = ${factors.join(' + ')}`)
        } else {
            console.log(`${n} is NOT perfect.`)
        }
    }
})