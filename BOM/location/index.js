/*
Browser object model
--------------------
location object
*/

console.log(location); // location object

// href
console.log(location.href);

// protocol
console.log(location.protocol);

// hostname
console.log(location.hostname);

// port 
console.log(location.port);

// pathname 
console.log(location.pathname);

let obj = document.querySelector(".location-div");
obj.children[0].innerText = "Hyper referece: " + location.href;
obj.children[1].innerText = "Protocol: " + location.protocol;
obj.children[2].innerText = "Host name: " + location.hostname;
obj.children[3].innerText = "Path name: " + location.pathname;

let web = document.getElementById("reyad-web");

web.addEventListener("click", function() {
    location.assign("http://reyad.ezyro.com/");
});