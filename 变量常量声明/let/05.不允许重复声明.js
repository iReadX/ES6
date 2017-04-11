/**
 * let不允许在相同作用域内，重复声明同一个变量
 */

// 报错
function () {
    let a = 10;
    var a = 1;
}

// 报错
function () {
    let a = 10;
    let a = 1;
}

function func(arg) {
    let arg; // 报错
}

function func(arg) {
    {
        let arg; // 不报错
    }
}
