/**
 * Math.log10(x)返回以10为底的x的对数
 * x小于0，则返回NaN
 */

// 基本使用
Math.log10(2) // 0.3010299956639812
Math.log10(1) // 0
Math.log10(0) // -Infinity
Math.log10(-2) // NaN
Math.log10(100000) // 5

// ES5 模拟
Math.log10 = Math.log10 || function (x) {
    return Math.log(x) / Math.LN10;
};
