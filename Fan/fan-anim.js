function anim(elem) {
    return document.querySelector(elem);
}

function stopFan() {
    anim('.fanbox').style.animationPlayState = 'paused';
}
function StartFan(speed) {
    var button = document.getElementById("btn1");
    if (button.innerHTML == "On") {
        if (speed == 0) {
            anim('.fanbox').style.animationPlayState = 'running';
            anim('.fanbox').style.animationDuration = '1s';
        }
        if (speed == 1) {
            anim('.fanbox').style.animationPlayState = 'running';
            anim('.fanbox').style.animationDuration = '0.8s';
        }
        if (speed == 2) {
            anim('.fanbox').style.animationPlayState = 'running';
            anim('.fanbox').style.animationDuration = '0.5s';
        }
        if (speed == 3) {
            anim('.fanbox').style.animationPlayState = 'running';
            anim('.fanbox').style.animationDuration = '0.1s';
        }
        
    }

}
function btncng() {
    var fan = document.getElementById("fanbox");
    var button = document.getElementById("btn1");
    if (button.innerHTML === "On") {
        button.innerHTML = "Off";
        button.style.backgroundColor = "red";
        stopFan();
    } else {
        button.innerHTML = "On";
        button.style.backgroundColor = "#6CF746";
        StartFan(0);
    }
}