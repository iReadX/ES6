/**
 * const的作用域与let命令相同：只在声明所在的块级作用域内有效
 */
if (true) {
    const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
