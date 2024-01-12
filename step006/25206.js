const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 20
let scores = 0
let total = 0
rl.on('line', (str) => {
    const [_, score, grade] = str.trim().split(' ')
    if (grade !== 'P') {
        if (grade === 'A+') {
            total += parseFloat(score) * 4.5
        } else if (grade === 'A0') {
            total += parseFloat(score) * 4.0
        } else if (grade === 'B+') {
            total += parseFloat(score) * 3.5
        } else if (grade === 'B0') {
            total += parseFloat(score) * 3.0
        } else if (grade === 'C+') {
            total += parseFloat(score) * 2.5
        } else if (grade === 'C0') {
            total += parseFloat(score) * 2.0
        } else if (grade === 'D+') {
            total += parseFloat(score) * 1.5
        } else if (grade === 'D0') {
            total += parseFloat(score) * 1.0
        } else if (grade === 'F') {
            total += parseFloat(score) * 0.0
        }
        scores += parseFloat(score)
    }
    count --
    if (count < 1) rl.close()
}).on('close', () => console.log(total/scores))