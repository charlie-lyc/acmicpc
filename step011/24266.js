const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0
rl.on('line', (str) => {
    n = BigInt(str.trim())
    rl.close()
}).on('close', () => {
    // console.log(n * n * n) // XXX
    // console.log(String(n * n * n))
    // console.log((n * n * n).toString())
    console.log(`${n * n * n}`)
    console.log(3)
})

/**
 * 1 <= n <= 50,000
 * 500,000 * 500,000 * 500,000 = 125,000,000,000,000,000
 * Number()
 * -9,007,199,254,740,992 ~ 9,007,199,254,740,991
 * BigInt()
 * 125,000,000,000,000,000n
 * String()
 * '125,000,000,000,000,000'
 */