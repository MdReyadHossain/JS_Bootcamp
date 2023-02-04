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
const functionVariable = function(x) {
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

num.forEach((ele, index, arr)=>{
    arr[index] = ele ** 2;
})
console.log(num);


// filter : not applicable for existing array/obj
const newNum = num.filter((ele)=> ele > 500);
    
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


const FilterVehicle = () => vehicle.filter((obj) => obj.pw > 500 ).map((obj) => obj.name);

console.log(FilterVehicle());