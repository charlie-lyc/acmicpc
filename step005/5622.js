const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0
rl.on('line', (str) => {
    const chars = str.trim().split('')
    for (let i = 0; i < chars.length; i ++) {
        if ('ABC'.includes(chars[i])) result += 3
        else if ('ABC'.includes(chars[i])) result += 3
        else if ('DEF'.includes(chars[i])) result += 4
        else if ('GHI'.includes(chars[i])) result += 5
        else if ('JKL'.includes(chars[i])) result += 6
        else if ('MNO'.includes(chars[i])) result += 7
        else if ('PQRS'.includes(chars[i])) result += 8
        else if ('TUV'.includes(chars[i])) result += 9
        else if ('WXYZ'.includes(chars[i])) result += 10
    }
    rl.close()
}).on('close', () => console.log(result))