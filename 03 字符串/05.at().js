/**
 * 返回字符串给定位置的字符
 * es5: charAt 不能识别码点大于0xFFFF的字符
 * es6: at 可以识别Unicode编号大于0xFFFF的字符，返回正确的字符 目前处于提案，可使用at.js代替 https://github.com/es-shims/String.prototype.at
 */

// ES5
'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"

// ES6
'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"
