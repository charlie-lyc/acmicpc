const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
let result = ''
rl.on('line', (str) => {
    if (T === 0) {
        T = parseInt(str.trim())
        if (T < 1) rl.close()
    } else {
        const [A, B] = str.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
        result += `${A + B}\n`
        T --
        if (T < 1) rl.close()
    }
}).on('close', () => {
    console.log(result)
})