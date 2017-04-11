/**
 * ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 */

// 为变量赋值，只能直接指定值
let a = 1;
let b = 2;
let c = 3;

// 数组解构
let [a, b, c] = [1, 2, 3];

let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];
foo // 1
bar // 2
baz // 3

let [, , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

/**
 * 解构不成功，变量的值就等于undefined
 */
let [foo] = [];
let [bar, foo] = [1];
foo // undefined

/**
 * 不完全解构
 * 即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功
 */
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

/**
 * 等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
 */
// 报错
let [foo] = 1; // 转为对象以后不具备 Iterator 接口
let [foo] = false; // 同上
let [foo] = NaN; // 同上
let [foo] = undefined; // 同上
let [foo] = null; // 同上
let [foo] = {}; // 空对象不具备 Iterator 接口

/**
 * 默认值
 * ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的
 */
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

let [x = 1, y = x] = []; // x=1; y=1
let [x = 1, y = x] = [2]; // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = []; // ReferenceError
