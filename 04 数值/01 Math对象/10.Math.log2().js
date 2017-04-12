/**
 * Math.log2(x)返回以2为底的x的对数
 * x小于0，则返回NaN
 */

// 基本使用
Math.log2(3) // 1.584962500721156
Math.log2(2) // 1
Math.log2(1) // 0
Math.log2(0) // -Infinity
Math.log2(-2) // NaN
Math.log2(1024) // 10
Math.log2(1 << 29) // 29

// ES5 模拟
Math.log2 = Math.log2 || function (x) {
    return Math.log(x) / Math.LN2;
};
