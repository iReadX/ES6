/**
 * ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）
 */

String.fromCharCode(0x20BB7); // ஷ
//--> String.fromCharCode不能识别大于0xFFFF的码点，所以0x20BB7就发生了溢出，最高位2被舍弃了，最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符

/**
 * ES6提供了String.fromCodePoint方法，可以识别0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反
 */

String.fromCodePoint(0x20BB7); // 𠮷

// ! fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上
