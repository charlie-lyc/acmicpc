const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const rectPoints = []
const result = []
rl.on('line', (str) => {
    const point = str.trim().split(' ').map((ele) => parseInt(ele))
    rectPoints.push(point)
    if (rectPoints.length === 3) {
        const xPoints = {}
        const yPoints = {}
        rectPoints.forEach((ele) => {
            if (!(ele[0] in xPoints)) xPoints[ele[0]] = 1
            else xPoints[ele[0]] ++
            if (!(ele[1] in yPoints)) yPoints[ele[1]] = 1
            else yPoints[ele[1]] ++
        })
        for (const x in xPoints) {
            if (xPoints[x] === 1) result.push(x)
           
        }
        for (const y in yPoints) {
            if (yPoints[y] === 1) result.push(y)
        }
        rl.close()
    }
}).on('close', () => console.log(result.join(' ')))