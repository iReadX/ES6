/**
 * const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用
 */

if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
}
