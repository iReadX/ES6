/**
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */

// 采用这种写法时，变量的声明和赋值是一体的
let { bar,foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined

/**
 * 如果变量名与属性名不一致，必须写成下面这样
 */
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
//--> foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'


let obj = {
    p: [
        'Hello',
        {
            y: 'World'
        }
    ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
