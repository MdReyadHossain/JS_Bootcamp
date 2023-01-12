/*
timing events:
--------------
1. setTimeout()
2. setInterval()
*/


// setTimeout()
let email = document.getElementById("email");
let btn = document.getElementById("email-save");
let stat = document.getElementById("stat");

btn.addEventListener("click", ()=>{
    if(email.value == "") {
        stat.style.color = "red";
        stat.innerText = "Input incomplete!";
    }
    else {
        console.log(email.value);
        stat.style.removeProperty("color");
        stat.innerText = "Submit Succesfull";
    }

    setTimeout(()=>{
        stat.innerText = "";
    }, 2000);
});


// setInterval()
let scrn = document.getElementById("scrTime");
let cnt = document.getElementById("cnt");
let startBtn = document.querySelectorAll("#timer");
let stopBtn = document.getElementById("stop");
let clc = document.getElementById("clock");
let time = 0, timer, scrnTimer, clockRun;

window.addEventListener("load", function(){
    i = 0
    scrn.innerHTML = i;
    
    scrnTimer = setInterval(()=>{   
        i++;
        scrn.innerText = i;
    }, 1000);
});

Array.from(startBtn).map((start)=>{
    start.addEventListener("click", (event)=>{
        let txt = event.target.innerText;    
        console.log(txt);
        if(txt == "20 sec") {time = 20;}
        else if(txt == "2 minute") {time = 120;}
        else if(txt == "5 minute") {time = 300;}
    
        cnt.innerText = time;
    
        timer = setInterval(()=>{
            time--;
            cnt.innerText = time;
            if(time <= 0) {
                clearInterval(timer);
                cnt.innerText = "Time out!";
            }
        }, 1000);
    });
});

stopBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    time = 0;
    cnt.innerText = time;
});

window.addEventListener("load", clockTime);

function clockTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    if(hh > 12) 
        hh = hh - 12;

    hh = formatTime(hh);
    mm = formatTime(mm);
    ss = formatTime(ss);

    clc.innerText = hh + " : " + mm + " : " + ss;

    clockRun = setInterval(clockTime, 1000);
}

function formatTime(value){
    if(value < 10) {
        value = "0" + value;
    }

    return value;
}
