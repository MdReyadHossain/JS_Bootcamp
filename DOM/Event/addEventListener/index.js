let cnt = 0;
let pic = document.getElementById("pic");
let audio;
function picstory() {
    pic.src = "image/dog.jpg";
    pic.alt = "Dog"
}

function txtchange() {
    cnt++;
    document.querySelector(".txt").innerHTML = cnt;
}

// Event Listener: click, mouseover, mouseout
pic.addEventListener("mouseover", function() {
    pic.style.border = "1px solid black";
    pic.style.borderRadius = "10px";
});

pic.addEventListener("mouseout", function() {
    pic.style.removeProperty('border');
    pic.style.removeProperty('border-radius');
});

// multiple listener
for(let i = 0; i < document.querySelectorAll(".track").length; i++) {
    let track = document.querySelectorAll(".track")[i];
    let button;
    track.addEventListener("click", function() {
        button = this.innerHTML;
        animationPlay(button, track, i);
        audioPlay(button, i);
    });
}

// for keyboard button
document.addEventListener("keypress", function(event) {
    if(event.key == "a" || event.key == "A") {
        let text = document.querySelectorAll(".track")[0].innerHTML;
        let track = document.querySelectorAll(".track")[0];
        animationPlay(text, track, 0);
        audioPlay(text, 0);
    }

    else if(event.key == "y" || event.key == "Y") {
        let text = document.querySelectorAll(".track")[1].innerHTML;
        let track = document.querySelectorAll(".track")[1];
        animationPlay(text, track, 1);
        audioPlay(text, 1);
    }
});

document.addEventListener("keydown", function(event){
    document.getElementById("key").innerHTML = "Button Pressed: " + event.key;
})

function audioPlay(button, i) {
    if(button === "Track 1") {
        audio = new Audio("sound/Ahh.mp3");
        audio.volume = 1;
        audio.play();
    }

    if(button === "Track 2") {
        audio = new Audio("sound/yamete.mp3");
        audio.volume = 1;
        audio.play();
    }
}

function animationPlay(button, track, i) {
    track.innerHTML = "Playing...";
    if(i == 0){
        setTimeout(function(){
            document.querySelectorAll(".track")[i].innerHTML = button;
        }, 1000);
    }
    else if(i == 1){
        setTimeout(function(){
            document.querySelectorAll(".track")[i].innerHTML = button;
        }, 2000);
    }
}


    