/*

error handle 
------------
throw : customized error message

*/
let num = document.getElementById("num");

document.getElementById("toss").addEventListener("click", ()=>{
    try {
        if(num.value > 4) {
            throw "Input number limit exceed!";
        }
        else if(num.value < 2) {
            throw "Input number too small!";
        }
    } 
    catch (error) {
        alert(error);
    }
});