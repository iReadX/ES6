/**
 * Math.expm1(n)返回eⁿ - 1，即Math.exp(n) - 1
 */

// 基本使用
Math.expm1(-1) // -0.6321205588285577
Math.expm1(0) // 0
Math.expm1(1) // 1.718281828459045

// ES5 模拟
Math.expm1 = Math.expm1 || function (n) {
    return Math.exp(n) - 1;
};
