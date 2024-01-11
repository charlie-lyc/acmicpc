const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
rl.on('line', (str) => {
    if (T === 0) {
        T = parseInt(str.trim())
    } else {
        const [r, S] = str.trim().split(' ')
        const R = parseInt(r)
        let result = ''
        for (let i = 0; i < S.length; i ++) {
            for (let j = 0; j < R; j ++) {
                result += S[i]
            }
        }
        console.log(result)
        T --
        if (T < 1) rl.close()
    }
})