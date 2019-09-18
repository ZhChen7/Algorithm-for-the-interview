/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    let tag = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let a = digits.split('')
    let code = []
    a.forEach(function (value) {
        if (tag[value]) {
            code.push(tag[value])
        }
    })

    let GETfun = (arr) => {
        let newarr = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                newarr.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        code.splice(0, 2, newarr)

        if (code.length > 1) {
            GETfun(code)
        } else {
            return newarr
        }
        return code[0]
    }

    return GETfun(code)
};


console.log(letterCombinations('23'))
