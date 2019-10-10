function findDup(array) {
    // 累加函数
    function add(num) {
        if (!num) return num
        return num + add(num - 1)
    }

    suma = add(1000)
    // 无序数组所有项的和
    let sumab = array.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sumab - suma
}



