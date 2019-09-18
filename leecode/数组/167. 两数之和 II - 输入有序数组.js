var twoSum = function(numbers, target) {
   let pre=0,cur=numbers.length-1
    if(numbers.length <=2){
        return [++pre,++cur];
    }
    while (pre<cur){
       if (numbers[pre]+numbers[cur]>target){
           cur--
       }else if(numbers[pre]+numbers[cur]<target){
            pre++
       }else{
           return [++pre,++cur]
       }
    }

};

console.log(twoSum([2, 7, 11, 15],9))
