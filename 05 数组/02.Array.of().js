/**
 * Array.of方法用于将一组值，转换为数组
 */

// 基本使用
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

// Array
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

// 弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]

/**
 * ES5 模拟
 */
function ArrayOf() {
    return [].slice.call(arguments);
}
