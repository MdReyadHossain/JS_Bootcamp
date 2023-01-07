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

let box = document.querySelector(".box");
let drag = document.getElementById("dragText");

drag.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("txt", drag.id);
}); 

box.addEventListener("dragover", function(event) {
    event.preventDefault();
});

box.addEventListener("drop", function(event) {
    let obj = event.dataTransfer.getData("txt");
    box.appendChild(document.getElementById(obj));
    // event.preventDefault();
});