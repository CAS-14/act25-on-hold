var audio = document.getElementById("bgmusic")
audio.volume = 0.4;
if (audio.currentTime > 0) {
    audio.pause();
    audio.currentTime = 0;
} else {
    audio.play();
}