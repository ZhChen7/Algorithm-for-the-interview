var findKthLargest = function(nums, k) {
    nums.sort((a,b)=> b-a)
    return nums[k-1]
};


console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))
