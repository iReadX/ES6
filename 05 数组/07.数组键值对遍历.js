/**
 * 数组键、值、对编列
 */

/**
 * 键名的遍历
 */
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

/**
 * 对键值的遍历
 */
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

/**
 * 对键值对的遍历
 */
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"
