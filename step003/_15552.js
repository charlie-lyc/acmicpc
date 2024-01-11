const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
let result = ''
rl.on('line', (str) => {
    if (T === 0) {
        T = parseInt(str.trim())
        if (T < 1) rl.close()
    } else {
        const [A, B] = str.trim().split(' ').filter((ele) => ele !== '').map((ele) => parseInt(ele))
        result += `${A + B}\n`
        T --
        if (T < 1) rl.close()
    }
}).on('close', () => {
    console.log(result)
})

/**
 * 최초 문제 풀이를 위한 엔트리포인트로 ('realine' 패키지를 이해하기위해서)
 * 게시판에서 이 문제의 풀이를 참조하였음.
 */