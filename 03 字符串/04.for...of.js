/**
 * ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
 * 可以识别大于0xFFFF的码点，传统的for循环无法识别
 */

var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
// " "
// " "

for (let i of text) {
    console.log(i);
}
// "𠮷"

for (let s of 'test') {
    console.log(s);
}
