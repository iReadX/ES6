/**
 * 标签模板
 * 末班字符串可以跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能
 */

var a = 5;
var b = 10;

tag `Hello ${ a + b } world ${ a * b }`;
//--> 等同于 tag(['Hello ', ' world ', ''], 15, 50);

function tag(strArr, ...values) {
    console.log(strArr); // [ 'Hello ', ' world ', '' ]
    console.log(values); // [ 15, 50 ]
    console.log(arguments); // { '0': [ 'Hello ', ' world ', '' ], '1': 15, '2': 50 }
}

/**
 * 重要应用，就是过滤HTML字符串，防止用户输入恶意内容
 */
function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}

var sender = '<script>alert("abc")</script>'; // 恶意代码
var message = SaferHTML`<p>${sender} has sent you a message.</p>`; // <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

console.log(message);

/**
 * 应用二：多语言转换
 */
