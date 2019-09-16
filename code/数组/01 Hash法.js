function findDup(array) {
    let len=array.length
    let newarr=[]
    if(!array || len<1){
        return -1
    }
    for (var i = 0; i < 1000; i++) {
        newarr[i] = 0
    }
    for (var i = 0; i < len; i++) {
        if (newarr[array[i]-1]== 0) {
            newarr[array[i]-1]=1
        }else{
            return array[i]
        }
    }
    return -1
}

console.log(findDup([1,2,3,4,32,2]))

