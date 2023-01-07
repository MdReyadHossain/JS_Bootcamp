/*

clipboard event object:
-----------------------
1. copy
2. cut
3. paste

*/

let clip = document.querySelector(".clip");
let event = document.querySelector("#textClip");

function emptyTextClip() {
    event.innerText = "";
}

clip.addEventListener("copy", function(){
    console.log("text copied!");
    event.innerText = "text copied!";
    setTimeout(emptyTextClip, 2000);
});

clip.addEventListener("cut", function(){
    console.log("text cut!");
    event.innerText = "text cut!";
    setTimeout(emptyTextClip, 2000);
});

clip.addEventListener("paste", function(){
    console.log("text pasted!");
    event.innerText = "text pasted!";
    setTimeout(emptyTextClip, 2000);
});

