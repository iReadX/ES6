/**
 * let实际上为 JavaScript 新增了块级作用域
 */

// 函数有两个代码块，都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。如果使用var定义变量n，最后输出的值就是10
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
}
f1(); // 5

// ES6 允许块级作用域的任意嵌套
{
    {
        {
            {
                {
                    let insane = 'Hello World';
                }
            }
        }
    }
}

// 外层作用域无法读取内层作用域的变量
{
    {
        {
            {
                {
                    let insane = 'Hello World'
                }
                console.log(insane); // 报错
            }
        }
    }
}

// 内层作用域可以定义外层作用域的同名变量
{
    {
        {
            {
                let insane = 'Hello World'; 
                {
                    let insane = 'Hello World'
                }
            }
        }
    }
}
