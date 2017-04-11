/**
 * 字符索引
 * ES5： indexOf 返回字符所在下标，如果为-1表示未找到
 * ES6： includes 返回布尔值，表示是否找到了参数字符串
 */

let s = 'Hello world!';

s.includes('L'); // false
s.includes('l'); // true
