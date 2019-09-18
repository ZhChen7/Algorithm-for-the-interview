/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let pre = 0, cur = 1, result = 0
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            cur++
        } else {
            pre = cur
            cur = 1
        }

        console.log(pre)
        console.log(cur)

        if (pre >= cur) {
            result++
        }
    }
    return result
};


console.log(countBinarySubstrings('00110'))
