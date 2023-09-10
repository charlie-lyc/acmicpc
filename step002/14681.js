const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (str1) => {
    let x = parseInt(str1.trim())
    rl.question('', (str2) => {
        let y = parseInt(str2.trim())
        if (x > 0 && y > 0) {
            console.log(1)
        } else if (x < 0 && y > 0) {
            console.log(2)
        } else if (x < 0 && y < 0) {
            console.log(3)
        } else {
            console.log(4)
        }
        rl.close()
    })
})
