const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0
rl.on('line', (str) => {
    const word = str.trim()
    const reversed = word.split('').reverse().join('')
    if (word === reversed) result = 1
    rl.close()
}).on('close', () => console.log(result))