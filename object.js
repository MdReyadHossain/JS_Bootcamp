/* Object Intro */
const object = { 
    prop1 : 10, 
    prop2 : 'hello world' 
};

object.prop2; // output = hello world
object['prop1']; // another way to get the property from the object



/* Nested Object */
const nestedObject = {
    prop1 : 
        10,
    prop2 : {
        prop3 : {
            prop4 :{
                value : 30
            }
        }
    } ,
    value : 40
}

nestedObject.prop2.prop3.prop4.value; // output = 30
nestedObject['prop1']; // ouutput = 10
nestedObject.value; // output = 40



/* array of objects */
const studentInfo = [
    {
        name: "Reyad",
        id: "20-43373-1",
        dept: "CSE",
    },
    {
        name: "Zebin",
        id: "19-41014-2",
        dept: "CSE",
    },
    {
        name: "Utso",
        id: "20-43337-1",
        dept: "CSE",
    }
]

for(let i = 0; i < studentInfo.length; i++) { // output : all the objects from the array
    console.log("Name : " + studentInfo[i].name);
    console.log("ID : " + studentInfo[i].id);
    console.log("Dept. : " + studentInfo[i].dept + "\n");
}

/* Math object */
let mathObj = Math.sqrt(25) // square root of 25 = 5
mathObj = Math.abs(-25) // |-25| = 25
mathObj = Math.sin(1) // sin 1, in radian
mathObj = Math.pow(2, 7) // 2^8 = 128
mathObj = Math.floor(2.25) // 2
mathObj = Math.ceil(2.25) // 3
mathObj = Math.round(2.25) // 2
mathObj = Math.round(2.55) // 3
mathObj = Math.max(2, 7, 3) // 7
mathObj = Math.random() // return a random number between 0 to 1

// random number between 1 to 5
mathObj = Math.ceil(Math.random() * 5)

console.log(mathObj);


/* Date object */
let date = new Date();
console.log(date); // showing all day details

date.getFullYear(); // only year
date.getMonth(); // index number of month (e.g. Jan = 0, Feb = 1, Mar = 2, ..., Dec = 11)
date.getDay(); // index number of day(e.g. Sat = 0, Sun = 1, ..., Fry = 6)
date.getHours(); // current hour(s) 


// object literals
function personInfo(name, age) {
    return {
        name, // name : name,
        age   // age : age
    }
}

console.log(personInfo("Reyad Hossain", 22));

// normal way...
let messege = {
    body : function() {
        return "Hello World!";
    }
}

console.log(messege.body());


// ES6
let messeges = {
    text() {
        return "Hello World!";
    }
}

console.log(messeges.text());


// distructuring 
let frontend = { // single object
    tool: "MS VS code",
    script_lang: "HTML",
    programmin_lang: "JS",
    library: {
        JS: "React JS",
        CSS: "Bootstrap"
    }
}
const {tool, script_lang, programmin_lang, library} = frontend;
console.log("\nFor Beginner frontend development: \n" + tool);
console.log(script_lang);
console.log(programmin_lang + "\nLibraries: ");
console.log(library.JS);
console.log(library.CSS);


// array of object (distructuring) 
let blocks = [
    {
        color: "Red",
        size: "Big"
    },
    {
        color: "Blue",
        size: "Small"
    },
    {
        color: "Gray",
        size: "Medium"
    }
];

for(let i = 0; i < blocks.length; i++) {
    const {color, size} = blocks[i];
    console.log(i+1 + ". Color = " + color + ", Size = " + size);
}


// distructuring function parameters with object
const vehicle = {
    car: "BMW",
    bike: "Kawasaki",
}

const distructuringObj = ({car, bike}) => {
    console.log(car);
    console.log(bike);
}

distructuringObj(vehicle);

