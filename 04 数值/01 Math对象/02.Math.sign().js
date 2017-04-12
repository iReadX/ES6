/**
 * Math.sign方法用来判断一个数到底是正数、负数、还是零
 * 返回值：
        参数为正数，返回+1
        参数为负数，返回-1
        参数为0，返回0
        参数为-0，返回-0
        其他值，返回NaN
 */

// 基本使用
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
Math.sign('a') // NaN
Math.sign() // NaN

/**
 * ES5 模拟
 */
Math.sign = Math.sign || function (x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0 ? 1 : -1;
};
