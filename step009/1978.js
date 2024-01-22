const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let result = 0
rl.on('line', (str) => {
    if (N === 0) {
        N = parseInt(str.trim())
    } else {
        const nums = str.trim().split(' ').map((ele) => parseInt(ele))
        if (N !== nums.length) rl.close()
        for (let i = 0; i < nums.length; i ++) {
            let isPrime = true
            if (nums[i] === 1) {
                continue
            } else {
                for (let j = 2; j < Math.floor(nums[i]/2) + 1; j ++) {
                    if (nums[i] % j === 0) {
                        isPrime = false
                        break
                    }
                }
                if (isPrime) result ++
            }
        }
        rl.close()
    }
}).on('close', () => console.log(result))