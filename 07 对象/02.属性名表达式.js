/**
 * 表达式放在方括号之内
 */

// 方法一
obj.foo = true;

// 方法二
obj['a' + 'bc'] = 123;

let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

var lastWord = 'last word';
var a = {
    'first word': 'hello',
    [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"

/**
 * 表达式还可以用于定义方法名
 */
let obj = {
    ['h' + 'ello']() {
        return 'hi';
    }
};

obj.hello() // hi

/**
 * 注意，属性名表达式与简洁表示法，不能同时使用，会报错
 */
// 报错
var foo = 'bar';
var bar = 'abc';
var baz = { [foo] };

// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};
