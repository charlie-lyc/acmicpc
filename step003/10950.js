const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

/* Recursion */
const result = []
const reAsk = (count) => {
    if (count === 0) {
        result.forEach((ele) => console.log(ele))
        rl.close()
        return
    }
    rl.question('', (str) => {
        const [A, B] = str.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
        result.push(A + B)
        reAsk(count-1)
    })
}
rl.question('', (str) => {
    const T = parseInt(str.trim())
    reAsk(T)
})

/* Promise */
// const query = (queryStr) => {
//     return new Promise((resolve) => {
//         rl.question(queryStr, (str) => {
//             resolve(str)
//         })
//     })
// }
// rl.question('', async (str) => {
//     const T = parseInt(str.trim())
//     const result = []
//     for (let i = 0; i < T; i ++) {
//         const answer = await query('')
//         const [A, B] = answer.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
//         result.push(A + B)
//     }
//     result.forEach((ele) => console.log(ele))
//     rl.close()
// })