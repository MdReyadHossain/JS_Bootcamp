let arr1 = new Array(5);
arr1[0] = "Reyad";
arr1[1] = 22;
arr1[2] = 'M'
console.log(arr1.length); // size of the array : 5

// array traverse 
for(let i = 0; i < 5; i++) {
    console.log(arr1[i]); 
}

arr1.push("Bangladesh"); // [ 'Reyad', 22, 'M', <2 empty items>, 'Bangladesh' ]
console.log(arr1.length); // array size : 6
arr1.pop() // remove the last element, size will be decrease: 5
console.log(arr1); // [ 'Reyad', 22, 'M', <2 empty items> ]

let arr2 = ["C#", "Python", "C++", "JS"];
let arr = arr1.concat(arr2) // arr1 and arr2 will be attached

console.log(arr) // [ 'Reyad', 22, 'M', <2 empty items>, 'C#', 'Python', 'C++', 'JS' ]

arr.shift() // romove the first element: [ 'Reyad', 22, 'M', <2 empty items>, 'C#', 'Python', 'C++', 'JS' ]
arr.unshift("Reyu") // [ 'Reyu', 22, 'M', <2 empty items>, 'C#', 'Python', 'C++', 'JS' ]

let arr3 = arr.slice(5, 9) // not effect on "arr" array
console.log(arr3) // [ 'C#', 'Python', 'C++', 'JS' ]


/* note: sort() can not sort number array, only for string array */
arr3.sort(); // [ 'C#', 'C++', 'JS', 'Python' ]
arr3.reverse(); // [ 'Python', 'JS', 'C++', 'C#' ]
let numArr = [20, 5, 1, 45, 4];

numArr.sort(); // [ 1, 20, 4, 45, 5 ] can not sort correctly

// sorting technique for number array
numArr.sort(
    function(x, y) {
        return x - y; // y - x (for reverse)
    }
); // [ 1, 4, 5, 20, 45 ]



/* 2D array */
let arr2d = []

// converted 1D array to 2D array
arr2d = [
    ["Zebin", 7],
    ["Utsho", 24],
    ["Reyad", 11]
]

arr2d.push(["Kamrul", 16]) 
//                           00    01        10    11         20     21         30    31  
console.log(arr2d) // [ [ 'Zebin', 7 ], [ 'Utsho', 24 ], [ 'Kamrul', 16 ], [ 'Reyad', 11 ] ]
arr2d.length // size of array: 4

for(let i = 0; i < 4; i++) { // for row
    for(let j = 0; j < 2; j++) { // for column
        console.log(arr2d[i][j]); // traverse 2D array
    }
}


// destructuring
const numbers = [2, 4, 6, 1, 9];
let [num1, num2, num3, ...nums] = numbers;

console.log(nums);
