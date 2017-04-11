/**
 * repeat 返回一个新字符串，表示将原字符串重复n次
 * 参数   如果是小数，会被取整
 * repeat的参数是负数或者Infinity，会报错
 */

'x'.repeat(3); // "xxx"
'y'.repeat(2.1); // "yy"
'z'.repeat(2.5); // "zz"
'n'.repeat(2.8); // "nn"
'a'.repeat(-1); // 报错
'b'.repeat(Infinity); // 报错
'c'.repeat(-0.9); // '' 0到-1之间的小数，则等同于0
'd'.repeat(NaN); // '' NaN等同于0
'e'.repeat('2'); // 'ee' 字符串，则会先转换成数字
