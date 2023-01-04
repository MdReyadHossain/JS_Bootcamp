let imgContainer = ["../../image/1500566326.jpg", "../../image/2697.jpg", "../../image/adfa.jpg", "../../image/ksajkfl.jpg"];

let imgSlider = document.getElementById("slider");

let cnt = 0;
imgSlider.src = imgContainer[cnt];

function prev() {
    cnt++;
    if(cnt < imgContainer.length) 
        imgSlider.src = imgContainer[cnt];

    else {
        cnt = 0; 
        imgSlider.src = imgContainer[cnt];
    }
}

function next() {    
    cnt--;
    if(cnt >= 0) 
        imgSlider.src = imgContainer[cnt];

    else {
        cnt = imgContainer.length - 1;
        imgSlider.src = imgContainer[cnt];
    }
}