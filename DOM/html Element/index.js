let head = document.querySelector(".headings");

// add an element in div
let element = document.createElement("h3");
let txt = document.createTextNode("I am heading 3");
element.appendChild(txt);

head.appendChild(element);

// remove an element form div
let element2 = document.querySelector(".headings h2");
head.removeChild(element2);

// add an element before any element
let element0 = document.createElement("h2");
let txt0 = document.createTextNode("I am new heading 2");
element0.appendChild(txt0);

head.insertBefore(element0, element);





// add class 
head.classList // showing all classes in this element
head.classList.add("heading-new");
head.classList.remove("headings");