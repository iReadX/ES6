/**
 * 隐藏死区
 */

var x = x; // 不报错
let y = y; // 报错 x is not defined


// 调用bar函数之所以报错（某些实现可能不报错），是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“
function bar(x = y, y = 2) {
    return [x, y]
}
console.log(bar()); // 报错 y is not defined

// x已经声明
function bar(x = 2, y = x) {
    return [x, y];
}
bar(); // [2, 2]
