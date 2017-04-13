/**
 * 函数绑定运算符是并排的两个双冒号（::），双冒号左边是一个对象，右边是一个函数
 * 该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面
 */

// 基本使用
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

/**
 * 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面
 */
var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);
