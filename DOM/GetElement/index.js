// get element by ID
let domheading = document.getElementById("dom1");
domheading.innerHTML = "Done!";

let dompara = document.getElementById("dom2"); 
dompara.innerHTML = "Bye!"

// get elements by tag name
document.getElementsByTagName("h1")[1].innerHTML = "Changed!";

// get elements by class name
document.getElementsByClassName("dom4")[0].innerHTML = "Div changed!";