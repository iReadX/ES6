/**
 * const声明的常量，也与let一样不可重复声明
 */

var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!"; // Identifier 'message' has already been declared
const age = 30; // Identifier 'age' has already been declared
