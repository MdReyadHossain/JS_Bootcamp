"use strict"; // strict mode: must be declare a variable 

x = 20;
console.log(`x = ${x}`); // ReferenceError
// var x;

y = 20;
console.log(`y = ${y}`);

var y; // hoisting 

const variable1 = 10; // 'const' will not be changed
let variable2 = 20; // 'let' will not be re-declared
var variable3 = 30; // 'var' can be re-declared
var variable3 = 35; 
const dataType = typeof variable1; // dataType = 'number'
typeof dataType; // string

/*variable semantic type*/
const firstName = "javascript"; // Camel case type 
const FirstName = "javascript"; // Pascal case type 
const firstname = "javascript"; // Genaral 
const first_name = "javascript"; // Snake case type 
const FIRST_NAME = "javascript"; // Constant case type 

/*boolian type*/
const boolian1 = false;
const boolian2 = true;
