/**
 * String.raw
 * 用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串
 */

String.raw `Hi\n`; // Hi\\n

// 如果原字符串的斜杠已经转义，那么String.raw不会做任何处理
String.raw `Hi\\n`; // "Hi\\n"

/**
 * String.raw
 */
String.raw = function (strings, ...values) {
    var output = "";
    for (var index = 0; index < values.length; index++) {
        output += strings.raw[index] + values[index];
    }
    output += strings.raw[index]
    return output;
}

String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
