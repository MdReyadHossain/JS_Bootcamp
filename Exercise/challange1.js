/*
1. Create a boolean variable called 'myBoolean' and set it to "true".

2. Create a string variable called 'myString' and set it to "hello world".

3. Create a number variable called 'firstNumber' and set it equal to "20".

4. Create another number variable called 'secondNumber' and set it equal to “40".

5. Re-assign secondNumber and set it equal to 80.

6. Create an array cal led 'myArray' and put 'myBoolean' at index , and 'myString' at index 1.

7. Create an object called 'myObject' and assign '' to a property called 'firstProperty', and
the sum of 'firstNumber' and 'secondNumber' to a property called 'sumProperty' (hint: we didn't cover
how to do this here).

8. Print 'myObject' to the console.

9. Print the 'sumProperty' of 'myObject' to the console.

10. Print the value at index 1 of 'firstProperty'.
*/

// ans 1
const myBoolean = true;

// ans 2
const myString = "hello world";

// ans 3
const firstNumber = 20;

// ans 4
let secondNumber = 40;

// ans 5
secondNumber = 80;

// ans 6
const myArray = [myBoolean, myString];

// ans 7
const myObject = {
    firstProperty : myArray,
    sumPorperty : firstNumber + secondNumber,
};

// ans 8
console.log(myObject);

// ans 9
console.log(myObject.sumPorperty);

// ans 10
console.log(myObject.firstProperty[1]);



/*
Why is this code invalid? Edit this until it is valid.

const objectVariable = {
    propertyl: 'i am property 1';
    property2: 'i am property 2';
    property3: [20, 30, 40];
};
console.log(objectVariable. property3 [2]);
*/

// Ans
const objectVariable = {
    propertyl: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
};

console.log(objectVariable. property3 [2]);