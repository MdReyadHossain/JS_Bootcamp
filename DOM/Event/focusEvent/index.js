/*

focus event object:
------------
1. blur
2. focus
3. focusin
4. focusout

*/

let text = document.getElementById("messege");
text.addEventListener("focusin", function(){
    console.log("focused in!");
    text.type = "text";
    text.style.backgroundColor = "yellow";
});

text.addEventListener("focusout", function(){
    console.log("focused out!");
    text.type = "password";
    text.removeAttribute("style"); // completely remove css
});

text.addEventListener("blur", function(){
    console.log("blurry!");
});