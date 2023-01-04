// query selector [class(.), id(#),...]
document.querySelector("h1").innerHTML = "Heading changed";

document.querySelector("#dom2").innerHTML = "Paragraph selected"

document.querySelector(".dom4").innerHTML = "H2 selected"

document.querySelector("div #para").innerHTML = "div para changed";

// for qurey selector all, must select by index number
document.querySelectorAll("h1")[1].innerHTML = "Heading changed by query selector all";
