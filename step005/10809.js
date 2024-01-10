const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

/* One Solution */
let S = ''
let result = []
rl.on('line', (str) => {
    S = str.trim()
    for (let i = 97; i < 123; i ++) {
        const idx = S.indexOf(String.fromCharCode(i))
        result.push(idx)
    }
    rl.close()
}).on('close', () => console.log(...result))

/* Another Solution */
// let S = ''
// let result = []
// for (let i = 0; i < 26; i ++) {
//     result.push(-1)
// }
// rl.on('line', (str) => {
//     S = str.trim()
//     for (let j = 0; j < S.length; j ++) {
//         const idx = S[j].charCodeAt(0) % 97
//         if (result[idx] === -1) {
//             result[idx] = j
//         }
//     }
//     rl.close()
// }).on('close', () => console.log(...result))