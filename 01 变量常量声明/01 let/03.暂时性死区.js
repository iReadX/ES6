/**
 * 暂时性死区（TDZ）
 * 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响
 */
var tmp = 123;
if (true) {
    // TDZ 开始
    // tmp = 'abc';
    // console.log(tmp); // 报错
    // TDZ 结束
    let tmp;
    console.log(tmp); // undefined
    tmp = 456;
    console.log(tmp); // 456
}

// typeof 使用
// console.log(typeof x); // 报错
let x;
