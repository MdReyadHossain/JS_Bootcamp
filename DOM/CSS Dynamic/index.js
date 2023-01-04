let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");

function changeStyle() {
    heading1.classList.add("reyad-heading");
    heading2.style.color = "red";
    heading2.style.fontSize = "small";
    heading2.style.fontStyle = "italic";
}

function removeStyle() {
    heading1.classList.remove("reyad-heading");
    
    heading2.style.removeProperty('color');
    heading2.style.removeProperty('font-size');
    heading2.style.removeProperty('font-style');
}