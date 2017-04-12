/**
 * Math.trunc方法用于去除一个数的小数部分，返回整数部分
 */

// 基本使用
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0

// 非数值，Math.trunc内部使用Number方法将其先转为数值
Math.trunc('123.45') // 123

// 空值和无法截取整数的值，返回NaN
Math.trunc(NaN) // NaN
Math.trunc('a') // NaN
Math.trunc() // NaN

/**
 * ES5 模拟
 */
Math.trunc = Math.trunc || function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
};
