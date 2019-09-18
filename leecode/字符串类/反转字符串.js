/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//     let arr = s.split(' ')
//     let newarr = []
//     arr.forEach(function (e) {
//         e = e.split('').reverse().join('')
//         newarr.push(e)
//     })
//    return newarr.join(' ')
// };

var reverseWords = function (s) {
    return s.match(/[\w']+/g).map((item) => {
        return  item.split('').reverse().join('')
    }).join(' ')
};


console.log(reverseWords("Let's take LeetCode contest"))
