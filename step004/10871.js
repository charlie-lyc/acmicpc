const rl = require('readline').createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let N = 0
let X = 0
let arr = []
let result = ''
rl.on('line', (str) => {
    if (N === 0) {
        const splitted = str.trim().split(' ')
        N = parseInt(splitted[0])
        X = parseInt(splitted[1])
        if (N < 1 || X < 1 ) rl.close()
    } else {
        arr = str.trim().split(' ')
        if (arr.length !== X) rl.close()
        arr.forEach((ele) => {
            if (parseInt(ele) < X) result += `${ele} `
        })
        console.log(result)
        rl.close()
    }
})