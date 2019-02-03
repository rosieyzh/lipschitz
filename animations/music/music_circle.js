
var soundA;

function preload() {
    //soundFormats('mp3');
    soundA = loadSound('music/circlemp3.mp3');
}

function setup() {
    soundA.setVolume(0.5);
    soundA.play();
}
