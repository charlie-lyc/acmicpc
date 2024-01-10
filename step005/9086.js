const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
let S = ''
rl.on('line', (str) => {
    if (T === 0) {
        T = parseInt(str.trim())
    } else {
        S = str.trim()
        console.log(`${S[0]}${S[S.length-1]}`)
        T --
        if (T < 1) rl.close()
    }
})