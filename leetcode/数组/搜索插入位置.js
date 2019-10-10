/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//     let left = 0, right = 0
//     right = nums.length
//     let mid = 0
//     while (left < right) {
//         mid = parseInt((left + right) / 2)
//         if (target > nums[mid]) {
//             left = mid + 1
//         } else if (target < nums[mid]) {
//             right = mid
//         } else {
//             return mid
//         }
//     }
//     return left
// };

var searchInsert = function (nums, target) {
     nums.forEach(function (value, index, array) {
        if (value >= target) {
           return index
        }
    })

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target){
            return i
        }
    }
    return nums.length
};

console.log(searchInsert([1, 3, 5, 6], 4))
