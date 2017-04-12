/**
 * 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
 * 如果没有符合条件的成员，则返回undefined
 */

// 基本使用
[1, 4, -5, 10].find((n) => n < 0); // -5
[1, 5, 10, 15].find(function (value, index, arr) {
    return value > 9;
}) // 10
[1, NaN].find(n => Object.is(NaN, n)) // NaN
