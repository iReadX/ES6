/**
 * Number.isNaN()用来检查一个值是否为NaN
 * 传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效
 * Number.isNaN()只有对于NaN才返回true，非NaN一律返回false
 */

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true

/**
 * ES5通过下面的代码，部署Number.isNaN()
 */
(function (global) {
    var global_isNaN = global.isNaN;

    Object.defineProperty(Number, 'isNaN', {
        value: function isNaN(value) {
            return typeof value === 'number' && global_isNaN(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this);
