const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let X = 0
let result = 0
rl.on('line', (str) => {
    X = parseInt(str.trim())
    let r, c
    let direction = true
    for (let i = 0; i < X; i ++) {
        if (i === 0) {
            r = 0
            c = 0
        } else {
            if (direction) {
                r = r - 1
                c = c + 1
                if (r < 0) {
                    direction = false
                    r = 0
                }
            } else {
                r = r + 1
                c = c - 1
                if (c < 0) {
                    direction = true
                    c = 0
                }
            }
        }
    }
    result = `${r+1}/${c+1}`
    rl.close()
}).on('close', () => console.log(result))
