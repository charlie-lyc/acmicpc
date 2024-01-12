const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0
rl.on('line', (str) => {
    const word = str.trim()
    for (let i = 0; i < word.length; i ++) {
        if (word[i] === 'c') {
            if (word[i+1] === '=' || word[i+1] === '-') {
                i ++
            }
        } else if (word[i] === 'd') {
            if (word[i+1] === 'z' && word[i+2] === '=') {
                i += 2
            } else if (word[i+1] === '-') {
                i ++
            }
        } else if (word[i] === 'l' && word[i+1] === 'j') {
            i ++
        } else if (word[i] === 'n' && word[i+1] === 'j') {
            i ++
        } else if (word[i] === 's' && word[i+1] === '=') {
            i ++
        } else if (word[i] === 'z' && word[i+1] === '=') {
            i ++
        }
        result ++
    }
    rl.close()
}).on('close', () => console.log(result))