const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = '?'
rl.on('line', (str) => {
    const chars = str.trim().toLowerCase().split('')
    const reduced = chars.reduce((acc, ele) => {
        if (!(ele in acc)) acc[ele] = 1
        else acc[ele] ++
        return acc
    }, {})
    const values = Object.values(reduced)
    const maxValue = values.reduce((acc, ele) => {
        if (ele > acc) acc = ele
        return acc
    }, Number.MIN_VALUE)
    if (values.indexOf(maxValue) === values.lastIndexOf(maxValue)) {
        for (const key in reduced) {
            if (reduced[key] === maxValue) {
                result = key
                break
            }
        }
    }
    rl.close()
}).on('close', () => console.log(result.toUpperCase()))