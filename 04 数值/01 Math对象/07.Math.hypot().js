/**
 * Math.hypot方法返回所有参数的平方和的平方根
 * 参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回NaN
 */

// 基本使用
Math.hypot(3, 4); // 5  3² + 4² = 25 --> √25 = 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5'); // 7.0710678118654755
Math.hypot(-3); // 3
