/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pre=0,cur=1
    let flag=0
    console.log(nums)
    while(cur<nums.length){
        console.log(nums[pre]+' '+nums[cur])
        if (nums[pre] == nums[cur]){
            flag++
            if (flag>1){
                nums.splice(cur,1)
                console.log(nums)
                cur--
                flag=1
            }
            cur++
        }else{
            flag=0
            pre=cur
            cur++
        }
    }
   console.log(nums)
};
removeDuplicates([-3,-1,-1,0,0,0,0,0,2])
