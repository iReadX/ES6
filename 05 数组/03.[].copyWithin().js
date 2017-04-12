/**
 * 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组
 */

/**
 * target（必需）：从该位置开始替换数据
 * start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数
 * end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
 */
Array.prototype.copyWithin(target, start = 0, end = this.length)

// 基本使用
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]


// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1) // [4, 2, 3, 4, 5]


// 将3号位复制到0号位
[].copyWithin.call({
    length: 5,
    3: 1
}, 0, 3) // {0: 1, 3: 1, length: 5}


// 将2号位到数组结束，复制到0号位
var i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2); // Int32Array [3, 4, 5, 4, 5]


// 对于没有部署TypedArray的copyWithin方法的平台
// 需要采用下面的写法
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4); // Int32Array [4, 2, 3, 4, 5]
