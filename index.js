const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const playIcon = playButton.querySelector("i");

const songs = [
    {
        file: "./public/music/ihateeverythingaboutyou.mp3",
        name : "I Hate Everything About You",
        artist: "Three Days Grace"
    },
    {
        file: "./public/music/Bring_Me_To_Life.mp3",
        name : "Bring Me To Life",
        artist: "Evanescence"
    },
    {
        file: "./public/music/Freak_On_a_Leash.mp3",
        name : "Freak On A Leash",
        artist: "Korn"
    },
];

let currentSong = 0;
const music = new Audio(songs[currentSong].file);
const songName = document.getElementById("song-name");

function updateSongName() {
    songName.textContent =
    `playing > ${songs[currentSong].name} - ${songs[currentSong].artist}`;
}

function playMusic() {
    music.play();

    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}

function pauseMusic() {
    music.pause();

    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
}

playButton.addEventListener("click", () => {
    if (music.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
});

nextButton.addEventListener("click", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    music.src = songs[currentSong].file;
    updateSongName();
    playMusic();
});

prevButton.addEventListener("click", () => {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    music.src = songs[currentSong].file;
    updateSongName();
    playMusic();
});

music.addEventListener("ended", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    music.src = songs[currentSong].file;
    playMusic();
});
updateSongName();