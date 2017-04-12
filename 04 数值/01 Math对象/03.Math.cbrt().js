/**
 * Math.cbrt方法用于计算一个数的立方根
 */

// 基本使用
Math.cbrt(-1) // -1
Math.cbrt(0) // 0
Math.cbrt(1) // 1
Math.cbrt(8) // 2

// 非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值
Math.cbrt('8') // 2
Math.cbrt('a') // NaN

/**
 * ES5 模拟
 */
Math.cbrt = Math.cbrt || function (x) {
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y
};
