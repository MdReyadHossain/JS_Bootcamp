const numValue = 20;
const stringValue1 = '20';
const stringValue2 = '50';
typeof numValue; // number
typeof stringValue1; // string

/* comparison operator (>=, <=, <, >, ==, !=, ===, !==) */
numValue == stringValue1; // true (check the value)
numValue === stringValue1; // false (check the value and data type also)
numValue == stringValue2; // false
Number(stringValue1) === numValue; // true

const value = numValue == stringValue1; // value = true

numValue != stringValue2; // true
numValue != stringValue1; // false
numValue !== stringValue1; // true



/* logical operator (&&, ||, !) */
numValue === numValue && numValue == stringValue1 // true
numValue === numValue && numValue === stringValue1 // false

numValue === numValue || numValue === stringValue1 // true
numValue == stringValue2 || numValue === stringValue1 // false

!(numValue == stringValue1) // false
!(numValue === stringValue1) // true


const myObj = {
    prop1: 'first value',
    prop2: 20
};
const myArray = [40, 50, 2];
const result = myObj.prop2 === (myArray[0] / myArray[2]); // true



const myObj2 = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2
    }
};
const myArray2 = [myObj2.nestedObject1, myObj2.nestedObject2];
const result2 = (myArray2[0].price * myArray2[0].quantity) > (myArray2[1].price * myArray2[1].quantity); 



/* Ternary Operator (condition ? True statement : False statement) */
let num = 10;    
let resultNum = num > 0 ? "Positive" : "Negative"; // Positive
//             condition    true         false

num = 0;
resultNum = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"; // Zero
//          condition    true  false(condition)   true     false



/* Arithmatic Operator (+, -, *, /, %, **) */
let var1 = 6;
let var2 = 3;

var3 = var1 + var2; // 6 + 3 = 8
var3 = var1 - var2; // 6 - 3 = 3
var3 = var1 * var2; // 6 * 3 = 18
var3 = var1 / var2; // 6 / 3 = 2
var3 = var1 % var2; // 6 / 3 (remainder of division) = 0
var3 = var1 ** var2; // 6^3 = 216