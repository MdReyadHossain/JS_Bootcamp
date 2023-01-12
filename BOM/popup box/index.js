/*

popup box:
----------
1. alert
2. confirm
3. prompt

*/

alert("Welceme to popup box web-page");
let con = false;
let txt;
while(!con) {
    let name = prompt("Enter you name: ");
    if(name == null || name == "") 
        con = confirm("Don't you want to share your name?");
    
    else{
        con = confirm("Are you sure " + name + " is your name?");
        txt = name;
    }
}

let winName = document.createElement("h3");
let text = document.createTextNode(txt);
winName.appendChild(text);
document.body.appendChild(winName);
console.log(name);