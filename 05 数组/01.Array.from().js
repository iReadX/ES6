/**
 * Array.from方法用于将两类对象转为真正的数组：类似数组的对象和可遍历的对象
 */

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 5
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// 参数是一个真正的数组，Array.from会返回一个一模一样的新数组
Array.from([1, 2, 3]); // [1, 2, 3]

/**
 * ES5 模拟
 */
const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
)();

// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
Array.from([1,2,3], x => x * x); // [ 1, 4, 9 ]
