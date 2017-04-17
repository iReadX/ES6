/**
 * ES5 值相等只有两个运算符 == 和 === ，不能准确计算 -0 和 +0 、NaN
 * ES6 使用OBject.is()来进行计算
 */

// 基本使用
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

/**
 * ES5
 */
Object.defineProperty(Object,'is',{
    value: function(x,y){
        if (x === y) {
            // +0 不等于 -0
            return x !== 0 || 1 / x === 1 / y
        }
        return x !== x && y !== y
    },
    configurable: true,
    enumerable: false,
    writable: true
})
