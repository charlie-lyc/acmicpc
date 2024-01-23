const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
const rectPoints = []
let width = 0
let height = 0
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        const coord = str.trim().split(' ').map((ele) => parseInt(ele))
        rectPoints.push(coord)
        if (rectPoints.length === N) rl.close()
    }
}).on('close', () => {
    if (rectPoints.length === 1) {
        console.log(0)
    } else {
        const xMax = rectPoints.reduce((acc, ele) => {
            if (acc < ele[0]) acc = ele[0]
            return acc
        }, -10001)
        const xMin = rectPoints.reduce((acc, ele) => {
            if (acc > ele[0]) acc = ele[0]
            return acc
        }, 10001)
        const yMax = rectPoints.reduce((acc, ele) => {
            if (acc < ele[1]) acc = ele[1]
            return acc
        }, -10001)
        const yMin = rectPoints.reduce((acc, ele) => {
            if (acc > ele[1]) acc = ele[1]
            return acc
        }, 10001)
        width = xMax - xMin
        height = yMax - yMin
        console.log(width * height)
    }
})