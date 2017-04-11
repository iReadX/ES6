/**
 * 模板字符串
 * 用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
 */

// 普通字符串
`In JavaScript is a line-feed.`;

// 多行字符串
`In JavaScript this is
 not legal.`;

// 字符串中嵌入变量
// 模板字符串中嵌入变量，需要将变量名写在${}之中
var name = "Bob",
    time = "today";
`Hello ${name}, how are you ${time}`;

// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
// 如果不想要这个换行，可以使用 trim 方法消除它
`
hello
hi
`.trim();

// 大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性
var x = 1;
var y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

var obj = {
    x: 1,
    y: 2
};
`${obj.x + obj.y}` // 3


// 模板字符串之中还能调用函数
function fn() {
    return "Hello World";
}

`foo ${fn()} bar` // foo Hello World bar

// 如果模板字符串中的变量没有声明，将报错
// 变量place没有声明
var msg = `Hello, ${place}`; // 报错

// 模板字符串甚至还能嵌套
let temp = list => `
    <ul>
        ${list.map(item => `
            <li>${item}</li>
        `).join('')}
    </ul>
`;

console.log(temp([1, 2, 3, 4, 5]));
// <ul>

//         <li>1</li>

//         <li>2</li>

//         <li>3</li>

//         <li>4</li>

//         <li>5</li>

// </ul>
