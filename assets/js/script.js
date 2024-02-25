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
    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover.jpg" },


    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello", img: "./assets/img/cover2.jpg" },
    { url: "./assets/songs/Pehle Bhi Main.mp3", songName: "mind fresh song", subtitle: "", img: "./assets/img/cover3.jpg" },

    { url: "./assets/songs/Ram Siya Ram.mp3", songName: " Dunki", subtitle: "hello2", img: "./assets/img/cover4.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello3", img: "./assets/img/cover5.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello4", img: "./assets/img/cover6.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello5", img: "./assets/img/cover7.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "hello6", img: "./assets/img/cover8.jpg" },




]

// console.log(arr)
let audio = new Audio();
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
    console.log(clutter)
})
let currentIndex = 0;
let audioElement = new Audio();
result.innerHTML = clutter;

result.addEventListener("click", (event) => {

    console.log(musicArrayarr[event.target.id].songName)
    // const clickedElement = event.target.closest('.music-container');
    // if (clickedElement) {
    //     const dataIndex = parseInt(clickedElement.id);
    //     const songUrl = arr[dataIndex].url;
    //     console.log(songUrl);
    //     audio.src = arr[event.target.id].url;
    //     audio.play();
    // }

    // console.log(event.target)

    // audio.src = arr[event.target.id].url;
    // console.log(arr[event.target.id].url)
    // audio.play();
});


// cardContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains('music-container')) {
//         const dataIndex = parseInt(event.target.id);
//         if (!isNaN(dataIndex)) {
//             console.log(arr[dataIndex].url);
//             // Now you can set the audio source and play it
//             audio.src = arr[dataIndex].url;
//             audio.play();
//         }
//     }
// });


function volumeFunction() {
    let volumeBtn = document.querySelector("#volumeBtn");
    let volume = 0; // Variable name corrected to "volume"
    volumeBtn.addEventListener("click", () => {
        if (volume === 0) {
            volumeBtn.src = './assets/img/mute.svg'
            volume = 1;
        } else {
            volumeBtn.src = "./assets/img/volume.svg"
            volume = 0;
        }
    });
}

volumeFunction()

let playBtn = document.querySelector("#playBtn");
let play = 0;

let pauseBtn = document.querySelector("#pause-line")
playBtn.addEventListener("click", () => {
    console.log("joni haldaer")

    if (play === 0) {
        playBtn.style.opacity = "0";
        pauseBtn.style.opacity = "1"
        play = 1;
    }

    else {

        playBtn.style.opacity = "1";
        pauseBtn.style.opacity = "0"
        play = 0;
    }
})
