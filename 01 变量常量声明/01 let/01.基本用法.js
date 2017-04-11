/**
 * let 只在代码快内有效
 * var 代码块外也能读取
 */
{
    let a = 1;
    var b = 2;
}

console.log(a); // undefined
console.log(b); // 2

/*------------- 实例 ---------------*/

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[1](); // 10

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[1](); // 1

/**
 * for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域
 */
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc
