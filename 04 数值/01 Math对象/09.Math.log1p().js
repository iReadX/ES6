/**
 * Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)
 * x小于-1，返回NaN
 */

// 基本使用
Math.log1p(1) // 0.6931471805599453
Math.log1p(0) // 0
Math.log1p(-1) // -Infinity
Math.log1p(-2) // NaN

// ES5 模拟
Math.log1p = Math.log1p || function (x) {
    return Math.log(1 + x);
};
