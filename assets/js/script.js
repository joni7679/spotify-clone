//res
let hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
})

let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
    document.querySelector(".left").style.left = "-200%"

})





let musicArrayarr = [
    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Animal Movie", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/animal.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello", img: "./assets/img/cover2.jpg" },

    { url: "./assets/songs/Pehle Bhi Main.mp3", songName: "mind fresh song", subtitle: "", img: "./assets/img/cover3.jpg" },

    { url: "./assets/songs/Ram Siya Ram.mp3", songName: "Ram Shiya Ram", subtitle: "Ram Shiya Ram", img: "./assets/img/ram.jpg" },

    { url: "./assets/songs/Jale 2.mp3", songName: "Dunki", subtitle: "hello3", img: "./assets/img/cover5.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello4", img: "./assets/img/cover6.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello5", img: "./assets/img/cover7.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello6", img: "./assets/img/cover8.jpg" },




]

// console.log(arr)
let audio = new Audio();
let selecterSong = 0;
let musicTittle = document.querySelector("#music-tittle");
let playBtn = document.querySelector("#playBtn");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prevs")
let volumeControl = document.querySelector("#volumeControl")
function MainFunction() {
    let clutter = "";
    let result = document.querySelector(".card-container")
    musicArrayarr.forEach((data, idex) => {
        // console.log(data)
        clutter += `<div class="music-container" id="${idex}">
    <div class="music-theam">
        <div class="play-icon">
            <i class="ri-play-fill"></i>
        </div>
        <img src=${data.img} alt="">
    </div>
    <div class="music-title">
       <h3>${data.songName}</h3>
        <p>${data.subtitle}
        </p>
    </div>
</div>`
        // console.log(clutter)

    })
    result.innerHTML = clutter;
    audio.src = musicArrayarr[selecterSong].url;
    musicTittle.innerHTML = musicArrayarr[selecterSong].songName;


}
MainFunction()

let allSongs = document.querySelector(".card-container")
allSongs.addEventListener("click", (event) => {
    //     console.log(musicArrayarr[event.target.id].songName)
    //     console.log(musicArrayarr[event.target.id].url)
    selecterSong = event.target.id;
    playBtn.src = "./assets/img/pause.svg"
    MainFunction()
    audio.play()


})



function volumeFunction() {
    let volumeBtn = document.querySelector("#volumeBtn");
    let volume = 1; // Initially set volume to 1 (unmuted)
    volumeBtn.addEventListener("click", () => {
        if (volume === 1) {
            selecterSong.muted = true; // Mute the audio
            volumeBtn.src = './assets/img/mute.svg';
            volume = 0; // Update volume state to muted
        } else {
            selecterSong.muted = false; // Unmute the audio
            volumeBtn.src = "./assets/img/volume.svg";
            volume = 1; // Update volume state to unmuted
        }
    });
}


volumeFunction()

function playFuction() {
    let elme = 0;
    playBtn.addEventListener("click", () => {
        if (elme === 0) {
            playBtn.src = "./assets/img/pause.svg"
            MainFunction()
            audio.play()
            elme = 1;
        }
        else {
            playBtn.src = "./assets/img/play.svg"
            MainFunction()
            audio.pause()
            elme = 0;
        }
    })
}

playFuction()

nextBtn.addEventListener("click", () => {
    if (selecterSong < musicArrayarr.length - 1) {
        selecterSong++;
        MainFunction()
        // audio.play()
        musicTittle.innerHTML = musicArrayarr[selecterSong].songName;

    }


})

prevBtn.addEventListener("click", () => {
    if (selecterSong > 0) {
        selecterSong--;
        MainFunction()
        // audio.play()
        musicTittle.innerHTML = musicArrayarr[selecterSong].songName;

    }

})

volumeControl.addEventListener("change", () => {
    console.log("hello")
    audio.src.volume = volumeControl.value;
    console.log(volumeControl.value)
})