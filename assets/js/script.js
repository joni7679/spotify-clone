//res

// let hamburgerBtn = document.getElementById("hamburger");
// let closeBtn = document.getElementById("closeBtn");
// let leftNavBar = document.querySelector(".left");
// hamburgerBtn.addEventListener("click", () => {
//     // leftNavBar.classList.add("activenav");
//     leftNavBar.style.marginRight = 0;
//     console.log("jon")
// })









let arr = [
    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover.jpg" },


    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover2.jpg" },
    { url: "./assets/songs/Pehle Bhi Main.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover3.jpg" },

    { url: "./assets/songs/Ram Siya Ram.mp3", songName: " Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover4.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover5.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover6.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover7.jpg" },

    { url: "./assets/songs/Arjan Vailly Ne.mp3", songName: "Dunki", subtitle: "Dunki Drop 5: O Maahi | Shah Rukh Kha n | Taapsee Pannu | Pritam |Arijit Singh | Irshad Kamil", img: "./assets/img/cover8.jpg" },




]

// console.log(arr)
let audio = new Audio();
let clutter = "";
let result = document.querySelector(".card-container")
arr.forEach((data, idex) => {
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
let cardContainer = document.querySelector(".card-container")
result.innerHTML = clutter;
cardContainer.addEventListener("click", (event) => {
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
