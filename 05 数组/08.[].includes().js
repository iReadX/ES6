/**
 * 数组是否包含给定的值（与字符串的includes方法类似）
 * 
 * @param {any} target 索引值
 * @param {number} [start=0] 为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始
 */
Array.prototype.includes(target, start = 0){}

// 基本使用
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
