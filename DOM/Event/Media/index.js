// audio-video player event: canplay, play, playing, pause, progress(when video will load to play), ended, volumechange, waiting(when buffer)

const video = document.querySelector("video");

video.addEventListener("canplay", function() {
    console.log("Event: " + "canplay");
});

video.addEventListener("play", function() {
    console.log("Event: " + "play");
});

video.addEventListener("playing", function() {
    console.log("Event: " + "playing");
});

video.addEventListener("pause", function() {
    console.log("Event: " + "pause");
});

video.addEventListener("ended", function() {
    console.log("Event: " + "ended");
});

video.addEventListener("volumechange", function() {
    console.log("Event: " + "volumechange");
});

video.addEventListener("progress", function() {
    console.log("Event: " + "progress");
});

video.addEventListener("waiting", function() {
    console.log("Event: " + "waiting");
});

