const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let words = []
rl.on('line', (str) => {
    words = str.trim().split(' ').filter((ele) => ele !== '')
}).on('close', () => console.log(words.length))

/**
 * 문제) 첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열의 길이는 1,000,000을 넘지 않는다. 
 *      단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. // <= 이 부분 표현이 조금 애매함 !!! 
 *      또한 문자열은 공백으로 시작하거나 끝날 수 있다.
 *      result: one blank space(' ') might be included at the beginning, middle, or end of the input sentence as a mistake
 */