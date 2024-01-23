const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0
rl.on('line', (str) => {
    n = BigInt(str.trim())
    rl.close()
}).on('close', () => {
    console.log(`${n * (n - BigInt(1)) * (n - BigInt(2)) / BigInt(6)}`)
    console.log(3)
})

/**
 * TypeError: Cannot mix BigInt and other types, use explicit conversions
 */