/*

Mouse Event Object:
---------------
1. click
2. dblclick
3. mousedown
4. mouseup
5. mouseenter
6. mouseleave
7. mousemove
8. mouseover

*/

let div = document.querySelector("div");    
let btn = document.querySelectorAll(".btn");

div.addEventListener("click", function(e) {
    console.log("click");
    console.log("id: " + e.target.id);
    console.log("class: " + e.target.className);
    console.log("inner-html: " + e.target.innerHTML);
    console.log("text-content: " + e.target.innerText);
});

div.addEventListener("dblclick", function() {
    console.log("double click");
});

div.addEventListener("mousedown", function() {
    console.log("mouse down");
});

div.addEventListener("mouseup", function() {
    console.log("mouse up");
});

div.addEventListener("mouseenter", function() {
    console.log("mouse enter");
});

div.addEventListener("mouseleave", function() {
    console.log("mouse leave");
});

div.addEventListener("mousemove", function(e) {
    console.log("full page: (" + e.clientX + ", " + e.clientY + ")"); // coordinate perspective full webpage
    console.log("div: (" + e.offsetX + ", " + e.offsetY + ")"); // coordinate perspective selected item
});

div.addEventListener("mouseover", function() {
    console.log("mouse over");
});

// button event with map
Array.from(btn).map((button) => {
    button.addEventListener("click", function(e){
        console.log(e.target.innerText + " clicked!");
    })
});
