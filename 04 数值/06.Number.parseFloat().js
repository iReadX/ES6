/**
 * ES6将全局方法parseFloat()，移植到Number对象上面，行为完全保持不变
 */

// ES5 写法
parseFloat('123.45#') // 123.45

// ES6 写法
Number.parseFloat('123.45#') // 123.45
