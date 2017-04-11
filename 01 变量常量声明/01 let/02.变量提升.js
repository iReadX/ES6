/**
 * let 不存在变量提升
 * var 会产生变量提示
 */
console.log(foo); // undefined
var foo = 1;

console.log(bar); // 报错
let bar = 1;
