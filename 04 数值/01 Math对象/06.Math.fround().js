/**
 * Math.fround方法返回一个数的单精度浮点数
 * 对于整数来说，Math.fround方法返回结果不会有任何不同，区别主要是那些无法用64个二进制位精确表示的小数。这时，Math.fround方法会返回最接近这个小数的单精度浮点数
 */

// 基本使用
Math.fround(0) // 0
Math.fround(1) // 1
Math.fround(1.337) // 1.3370000123977661
Math.fround(1.5) // 1.5
Math.fround(NaN) // NaN

// ES5 模拟
Math.fround = Math.fround || function (x) {
    return new Float32Array([x])[0];
};
