import { message, setMessage } from './module.js';
// import { message as text } from './module.js';

let text = document.getElementsByTagName('h1');

text[0].innerHTML = message;

setTimeout(() => {
    setMessage("Module Message Changed");
    text[0].innerHTML = message;
}, 5000);

console.log("Hello");

