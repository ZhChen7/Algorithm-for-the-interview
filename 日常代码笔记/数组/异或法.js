function findDup(array) {
    let len = array.length
    result = 0
    if (!array || len < 1) {
        return -1
    }
    for (let i = 0; i < len; i++) {
        result ^= array[i]
    }
    for (let i = 0; i < len; i++) {
        result ^= i
    }
    return result
}

console.log(findDup([1, 2, 3, 4, 3, 5]))



