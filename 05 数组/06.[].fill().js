/**
 * 填充一个数组
 * 
 * @param {Number|String} target 数组填充元素
 * @param {number} [start=0] 起始位置
 * @param {any} [end=this.length] 结束位置 
 */
Array.prototype.fill(target, start = 0, end = this.length)

// 基本使用
['a', 'b', 'c'].fill(7) // [7, 7, 7]
new Array(3).fill(7) // [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c'] 从1号位开始，向原数组填充7，到2号位之前结束
