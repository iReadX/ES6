/**
 * ES6在Number对象上，新提供了Number.isFinite()
 * 用来检查一个数值是否为有限的（finite）
 * 传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效
 * Number.isFinite()对于非数值一律返回false
 */

Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

/**
 * ES5可以通过下面的代码，部署Number.isFinite方法
 */
(function (global) {
    var global_isFinite = global.isFinite;

    Object.defineProperty(Number, 'isFinite', {
        value: function isFinite(value) {
            return typeof value === 'number' && global_isFinite(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this);
