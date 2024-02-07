const songs = [
    {
        src: "../assets/lost-in-city-lights-145038.mp3",
        name: "Lost in the City Lights",
        artist: "Cosmo Sheldrake",
        cover: '../assets/cover-1.png'
    },
    {
        src: "../assets/forest-lullaby-110624.mp3",
        name: "Forest Lullaby",
        artist: "Lesfm",
        cover: '../assets/cover-2.png'
    }
];

const audioPlayer = document.getElementById('audioPlayer');
const seekBar = document.getElementById('seekBar');
const playButton = document.getElementById('playButton'); 
const playImg = document.getElementById('playImg');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const songName = document.getElementById('songName');
const artistName = document.getElementById('artistName');
const cover = document.getElementById('cover');
const songLengthElement = document.getElementById('songLength');
const timeElement = document.getElementById('time');

function nextSong(){
    song = (song + 1) % songs.length;
    audioPlayer.src = songs[song].src;
    songName.textContent = songs[song].name;
    artistName.textContent = songs[song].artist;
    playImg.src = "../assets/Pause_fill.svg";
    cover.className = "h-72 w-80 rounded-2xl bg-cover";
    cover.style.backgroundImage = `url('${songs[song].cover}')`;
    audioPlayer.play();
}

function prvSong() {
    song--;
    if (song < 0) {
        song = songs.length - 1;
    }
    audioPlayer.src = songs[song].src;
    songName.textContent = songs[song].name;
    artistName.textContent = songs[song].artist;
    playImg.src = "../assets/Pause_fill.svg";
    cover.className = "h-72 w-80 rounded-2xl bg-cover";
    cover.style.backgroundImage = `url('${songs[song].cover}')`;
    audioPlayer.play();
}
function playPause() { // Play and pause
    if (audioPlayer.paused) {
        audioPlayer.play();
        playImg.src = "../assets/Pause_fill.svg";
    } else {
        audioPlayer.pause();
        playImg.src = "../assets/Play_fill.svg";

    }
}

function padZero(number) {//add zero to left of 1 number time values
    return (number < 10 ? '0' : '') + number;
}

document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('body');
    element.classList.add("bg-[url('../assets/bg.jpg')]");
  });

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('cover');
    element.classList.add("bg-[url('../assets/cover-1.png')]");
});  

let song = 0;

playButton.addEventListener('click', playPause);// play or pause song
prevButton.addEventListener('click', prvSong);// go to previous song
nextButton.addEventListener('click', nextSong);// go to next song

seekBar.addEventListener('input', function() {// Seek bar
    const seekTime = audioPlayer.duration * (seekBar.value / 100);
    audioPlayer.currentTime = seekTime;
});

audioPlayer.addEventListener('timeupdate', function() {// Update seek bar
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progress = (currentTime / duration) * 100;
    seekBar.value = progress;
});

audioPlayer.addEventListener('loadedmetadata', function() {//update song length
    const duration = audioPlayer.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const formattedTime = padZero(minutes) + ':' + padZero(seconds);
    songLengthElement.textContent = formattedTime;
});

audioPlayer.addEventListener('timeupdate', function() {//update current time
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const formattedTime = padZero(minutes) + ':' + padZero(seconds);
    timeElement.textContent = formattedTime;

    const percent = (currentTime / duration) * 100;
    seekBar.value = percent;
});


audioPlayer.addEventListener('ended', function() {
    nextSong();
});