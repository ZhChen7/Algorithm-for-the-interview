function findDup(array) {
    let len = array.length
    index = 0
    if (!array || len < 1) {
        return -1
    }
    for (let i = 0; i < len; i++) {
        if (array[i] >= len) {
            return -1
        }
        if (array[index] < 0) {
            break
        }
        array[index] *= -1
        index = -1 * array[index]

    }
    return index
}

console.log(findDup([1, 2, 3, 4, 5, 2]))

