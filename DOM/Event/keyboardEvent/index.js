/*

keyboard event object:
----------------------
1. keydown
2. keyup
3. keypress

event properties: key, keyCode(ascii value), code, shiftKey 
*/

let key = document.getElementById("key");

key.addEventListener("keydown", function(e) {
    console.log(e.code);
    console.log(e.shiftKey); // boolean return
    console.log(e.repeat);
    if(e.repeat) {
        alert("repeated pressed!");
    }
});

key.addEventListener("keyup", function(e) {
    console.log("key up");
});

key.addEventListener("keypress", function(e) {
    console.log("key pressed");
});
