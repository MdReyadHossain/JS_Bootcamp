/*

drag event object:
------------------
1. dragstart 
2. drag 
3. dragend
4. dragenter
5. dragleave
6. dragover
7. drop

*/

function dragstart(event) {
    console.log("drag start!");
    event.dataTransfer.setData("txt", event.target.className);
    console.log(event.target.className);
};

let box = document.querySelector(".box");
let drag = document.getElementById("dragText");

// drag.ondragstart = dragstart;

drag.addEventListener("dragstart", dragstart);

box.addEventListener("dragover", function(event) {
    event.preventDefault();
});

box.addEventListener("drop", function(event) {
    let obj = event.dataTransfer.getData("txt");
    box.appendChild(document.querySelector("." + obj));
    event.preventDefault();
});