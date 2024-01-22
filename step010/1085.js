const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let xDistance
let yDistance
rl.on('line', (str) => {
    let [x, y, w, h] = str.trim().split(' ').map((ele) => parseInt(ele))
    if (w - x > w / 2) {
        xDistance = x
    } else {
        xDistance = w - x
    }
    if (h - y > h / 2) {
        yDistance = y
    } else {
        yDistance = h - y
    }
    rl.close()
}).on('close', () => {
    if (xDistance > yDistance) {
        console.log(yDistance)
    } else {
        console.log(xDistance)
    }
})