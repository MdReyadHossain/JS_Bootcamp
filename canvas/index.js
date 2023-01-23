let bdFlag = document.getElementById("bd-flag");
let context = bdFlag.getContext("2d");

context.lineWidth = 3;
context.strokeStyle = "black";
context.strokeRect(0, 0, 400, 300);

// context.fillStyle = "#ffffcc";
context.fillStyle = "green";
context.fillRect(2, 2, 396, 296);

let centerX = bdFlag.width / 2;
let centerY = bdFlag.height / 2;

context.beginPath();
context.arc(centerX, centerY, 80, 0, 2*Math.PI, false);
context.fillStyle = "red";
context.fill();
context.stroke();