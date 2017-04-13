/**
 * 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
 */

// 基本使用
console.log(...[1, 2, 3]) // 1 2 3
console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5

// 函数运用
function push(array, ...items) {
    array.push(...items)
    console.log(...items); // 1, 2, 3, 4, 5, 6
}

function add(x,y){
    return x + y
}

var numbers = [4, 38]
push(numbers,1,2,3,4,5,6) // [ 4, 38, 1, 2, 3, 4, 5, 6 ]
add(...numbers) // 42
