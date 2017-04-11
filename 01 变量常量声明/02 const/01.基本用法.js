/**
 * const声明一个只读的常量;一旦声明，常量的值就不能改变
 */
const PI = 3.1415;

// 重新赋值
PI = 3; // 报错 Assignment to constant variable

// const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
const foo; // 报错 Missing initializer in const declaration
