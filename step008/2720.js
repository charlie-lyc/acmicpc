const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
rl.on('line', (str) => {
    if (T === 0) {
        T = parseInt(str.trim())
    } else {
        let C = parseInt(str.trim())
        const changes = []
        changes.push(Math.floor(C / 25))
        C = C % 25
        changes.push(Math.floor(C / 10))
        C = C % 10
        changes.push(Math.floor(C / 5))
        C = C % 5
        changes.push(C)
        console.log(...changes)
        T --
        if (T < 1) rl.close()
    }
})