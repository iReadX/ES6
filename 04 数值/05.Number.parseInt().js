/**
 * ES6将全局方法parseInt()，移植到Number对象上面，行为完全保持不变
 */

// ES5的写法
parseInt('12.34') // 12

// ES6的写法
Number.parseInt('12.34') // 12
