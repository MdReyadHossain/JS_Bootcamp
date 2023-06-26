/* empty parameterized function */
function func1() {
    console.log("It's an empty parameterized function!");
}
func1(); // call func1

/* immediate call a function */
(function func2() {
    console.log("Hello world!");
})();


/* parameterized function */
function func3(num, str) {
    console.log(num);
    console.log(str);
}
func3(2, "javascript"); // call func3 with two initialized parameters


/* function variable */
const functionVariable = function (x) {
    return (2 + x);
}

functionVariable(1 + " Nice"); // output = 21 Nice


/* arrow function (ES6) */
const func4 = () => {
    console.log("arrow function");
}
func4();

const ReturnFunc = () => "Hello, Its return type"; // return type function

console.log(ReturnFunc());


/* return type */
function func5() {
    let num = 20;
    return num;
    num = 50;
}
const n = func5(); // n = 20; typeof n = number 

function func6() {
    const num = 20;
    return num >= 20;
}
const result = func6(); // result = true


/* access function in object property */
function department() {
    return 'CSE';
}

const studentInfo = {
    name: 'Reyad',
    dept: department // calling function and initialized in a property
}
studentInfo.name; // Reyad
studentInfo.dept(); // call the object of the propety as function

// default parameter
const messege = (txt = "Parameter empty!") => {
    console.log(`${txt}`);
}

messege("Hello World!");


// rest parameter : have to add at the end
const numbers = (num1, num2, ...par) => {
    console.log(num1, num2); // 1 21
    console.log(par); // [22, 23, 420]
}

numbers(1, 21, 22, 23, 420);


// forEach
num = [40, 30, 20, 10];
num.forEach(showArray)

function showArray(element) {
    console.log(element);
}

num.forEach((ele, index, arr) => {
    arr[index] = ele ** 2;
})
console.log(num);


// filter : not effect on existing(num) array/obj
const newNum = num.filter((ele) => ele > 500);

console.log(newNum);


// filter and map
const vehicle = [
    {
        name: "BMW",
        pw: 503
    },
    {
        name: "Lamborghini",
        pw: 626
    },
    {
        name: "Mazda",
        pw: 452
    },
];


const FilterVehicle = () => vehicle.filter((obj) => obj.pw > 500).map((obj) => obj.name);
console.log(FilterVehicle());


// startwith(), endwith() & includes()
let message = "Hello World of Love";
console.log(message.startsWith("World", 6)); // true
console.log(message.endsWith("Love", 19)); // true
console.log(message.includes("World", 2)); // true


/* callback and higher order function */
const square = (num) => {
    console.log(num * num);
}

const higherOrderFunction = (num, callback) => {
    callback(num);
}
higherOrderFunction(6, square);

// example:
const programOne = (callbackfunc) => {
    console.log("Program 1");
    callbackfunc();
}

const programTwo = (callbackfunc) => {
    // setTimeout(() => {              // asynchronous function -> setTimeout()
    console.log("Program 2");
    callbackfunc();
    // }, 2000);
}

const programThree = () => {
    console.log("Program 3");
}

programOne(() => {
    programTwo(() => {
        programThree();
    })
});

// Promise state: pending, resolve, reject
// const promise = new Promise((resolve, reject) => {
//     isPromiseDone = true;
//     if (isPromiseDone)
//         resolve("Promise resolved!");
//     else
//         reject("Promise broked!");
// })

// const anotherPromise = new Promise((resolve, reject) => {
//     resolve("Resolved from another promise!");
// })

// promise
//     .then((response) => {       // resolve 's argument will sent to .then parameter
//         console.log(response);
//     })
//     .catch((response) => {      // reject 's argument will sent to .catch parameter
//         console.log(response);
//     });

// Promise.all([promise, anotherPromise])
//     .then(([response, anotherResponse]) => { // destructuring in .then
//         console.log(response);
//         console.log(anotherResponse);
//     });

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved!");
//     }, 2000);
// })

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved!");
//     }, 1000);
// })

// Promise.race([promise1, promise2])
//     .then((response) => {
//         console.log(response);
//     });

console.log("");
// example:
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise resolved for Task 1!");
    })
}

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved for Task 2!");
        }, 2000);
    })
}

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise resolved for Task 3!");
    })
}

taskOne()
    .then((response) => { console.log(response) })
    .then(taskTwo)
    .then((response) => { console.log(response) })
    .then(taskThree)
    .then((response) => { console.log(response) })
    .catch((response) => { console.log(response) });
