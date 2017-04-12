// 基本使用
/**
 * 参数变量是默认声明的，所以不能用let或const再次声明
 * 使用参数默认值时，函数不能有同名参数
 * 如果参数默认值是变量，那么参数就不是传值的，而是每次都重新计算默认值表达式的值
 * 将参数默认值设为undefined，表明这个参数是可以省略的
 * 
 * @param {number} [x=0] 
 * @param {number} [y=0] 
 */
function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var p = new Point(); // { x: 0, y: 0 }

/**
 * 与解构赋值默认值结合使用
 * 
 * @param {any} {x, y = 5} 
 */
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
foo() // TypeError: Cannot read property 'x' of undefined

/**
 * 写法一：函数参数的默认值是空对象，但是设置了对象解构赋值的默认值
 * 
 * @param {any} [{x = 0, y = 0}={}] 
 * @returns 
 */
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

/**
 * 写法二：函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值
 * 
 * @param {any} [{x, y}={ x: 0, y: 0 }] 
 * @returns 
 */
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

/**
 * 参数默认值的位置
 * 
 * @param {number} [x=1] 
 * @param {any} y 
 * @returns 
 */
function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
f(, 1) // 报错
f(undefined, 1) // [1, 1]

/**
 * 传入undefined，将触发该参数等于默认值，null则没有这个效果
 * 
 * @param {number} [x=5] 
 * @param {number} [y=6] 
 */
function foo(x = 5, y = 6) {
  console.log(x, y);
}

foo(undefined, null) // 5 null

/**
 * 作用域实例
 */
let foo = 'outer';

function bar(func = x => foo) {
  let foo = 'inner';
  console.log(func()); // outer
}

bar();

var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1

var x = 1;
function foo(x, y = function() { x = 2; }) {
  x = 3;
  y();
  console.log(x);
}

foo() // 2
x // 1
