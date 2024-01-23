const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let M = 0
let result = 0
rl.on('line', (str) => {
    if (N === 0 && M === 0) {
        [N, M] = str.trim().split(' ').map((ele) => parseInt(ele))
    } else {
        const cards = str.trim().split(' ').map((ele) => parseInt(ele))
        if (cards.length !== N) {
            rl.close()
        } else {
            for (let i = 0; i < cards.length; i ++) {
                for ( let j = 0; j < cards.length; j ++) {
                    for (let k = 0; k < cards.length; k ++) {
                        if (i !== j && j !== k && i !== k) {
                            const sum = cards[i] + cards[j] + cards[k]
                            if (sum === M) {
                                result = sum
                                rl.close()
                            } else if (M > sum && sum > result) {
                                result = sum
                            }
                        }
                    }
                }
            }
            rl.close()
        }
    }
}).on('close', () => console.log(result))