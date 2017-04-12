/**
 * JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
 * ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限
 * Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内
 */

// ES5
var a = Math.pow(2, 53); // 9007199254740992
var b = a + 1; // 9007199254740993

a < b; // false
a === b; // true
a > b; // false

// ES6
Number.MAX_SAFE_INTEGER === a - 1; // true

Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(-Infinity) // false

Number.isSafeInteger(3) // true
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(9007199254740990) // true
Number.isSafeInteger(9007199254740992) // false

Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false

/**
 * Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内
 */
Number.isSafeInteger = function (n) {
    return (typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER);
}

// ! 如果验证运算的时候需要对参与运算的数及计算的结果进行验证是否为安全整数
