/**
 * ES6在Number对象上面，新增一个极小的常量Number.EPSILON
 * 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的
 * 但是如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果
 * 因此，Number.EPSILON的实质是一个可以接受的误差范围
 */

Number.EPSILON; // 2.220446049250313e-16

function withinErrorMargin(left, right) {
    return Math.abs(left - right) < Number.EPSILON;
}

withinErrorMargin(0.1 + 0.2, 0.3) // true
