/**
 * 顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。ES5之中，顶层对象的属性与全局变量是等价的
 */

window.a = 1;
a // 1

a = 2;
window.a // 2

/**
 * var命令和function命令声明的全局变量，依旧是顶层对象的属性
 * let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
 */
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined
