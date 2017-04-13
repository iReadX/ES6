/**
 * ES6允许直接写入变量和函数，作为对象的属性和方法
 */

// 基本使用
var foo = 'bar';
var baz = { foo };
// 等同于
var baz = {
    foo: foo
};

var o = {
    method() {
        return "Hello!";
    }
};

// 等同于

var o = {
    method: function () {
        return "Hello!";
    }
}
