/**
 * 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
 */

// 基本使用
[1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
}) // 2

// 该方法可以发现NaN，弥补了数组的IndexOf方法的不足
[NaN].indexOf(NaN) // -1
[NaN].findIndex(y => Object.is(NaN, y)) // 0
