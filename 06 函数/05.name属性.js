/**
 * 函数的name属性，返回该函数的函数名
 */

var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"

const bar = function baz() {};

// ES5
bar.name // "baz"

// ES6
bar.name // "baz"

// Function构造函数返回的函数实例，name属性的值为anonymous
(new Function).name // "anonymous"

// bind返回的函数，name属性值会加上bound前缀
function foo() {};
foo.bind({}).name // "bound foo"

(function () {}).bind({}).name // "bound "
