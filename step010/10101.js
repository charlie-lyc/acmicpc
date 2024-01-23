const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const angles = []
let result = ''
rl.on('line', (str) => {
    angles.push(parseInt(str.trim()))
    if (angles.length === 3) {
        if (angles[0] + angles[1] + angles[2] === 180) {
            if (angles[0] === angles[1] && angles[1] === angles[2]) {
                result = 'Equilateral'
            } else if (angles[0] === angles[1] || angles[1] === angles[2] || angles[0] === angles[2]) {
                result = 'Isosceles'
            } else if (angles[0] !== angles[1] && angles[1] !== angles[2] && angles[0] !== angles[2]) {
                result = 'Scalene'
            }
        } else {
            result = 'Error'
        }
        rl.close()
    }
}).on('close', () => console.log(result))