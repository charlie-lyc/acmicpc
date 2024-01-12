const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let result = 0
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        const word = str.trim()
        const chars = [word[0]]
        let isGrouped = true
        for (let i = 1; i < word.length; i ++) {
            if (!(chars.includes(word[i]))) {
                chars.push(word[i])
            } else {
                if (word[i-1] !== word[i]) {
                    isGrouped = false
                    break
                }
            }
        }
        if (isGrouped) result ++
        N --
        if (N < 1) rl.close()
    }
}).on('close', () => console.log(result))