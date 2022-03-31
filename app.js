const drumPad = document.getElementsByClassName("drumPad");


const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");


const drumMachine = function(drumSound,buttonLight) {
    let audio = new Audio();
    audio.src = `sounds/${drumSound}.wav`;
    audio.play();
    buttonLight.style.border = "solid red";
}


[boom, clap, hihat].forEach((element)=>{
    element.addEventListner('click', (e)=>{
      console.log(e.target.id);
   });
});


// boom.addEventListener("click", (e) => {
//     drumMachine("boom", boom);
//     console.log(e.target.id)
// })

// const boomDrumPad = document.getElementById('boom');
// const clapDrumPad = document.getElementById('clap');
// const drumsound = document.getElementById('drumsound');



// const drumSoundLibrary = {
//     boom: function () {
//         let audio = new Audio();
//         audio.src = "sounds/boom.wav";
//         if(delay.style.backgroundColor == "green") {
//             let audio = new Audio();
//             audio.src = "sounds/boom.wav";
//             audioPlay = audio.play();
//             boomDrumPad.style.border = "solid red";
//             track1functions(drumsound);
//        } if (stop.style.backgroundColor == "green") {
//            stopBeat();
//        } 
//     else {
//         let audio = new Audio();
//         audio.src = "sounds/boom.wav";
//         audio.play();
//         boomDrumPad.style.border = "solid red";
//     }
//     },

//     clap: function () {
//         let audio = new Audio();
//         audio.src = "sounds/clap.wav";
//         audio.play();
//         clapDrumPad.style.border = "solid red";
//     }             
// }
// boomDrumPad.addEventListener("mousedown", () => {

//     drumSoundLibrary.boom();
// });
// boomDrumPad.addEventListener("mouseup", () => {
//     boomDrumPad.style.border = "black solid";

// });



// document.addEventListener("keydown", (e) => {
//     if (e.code == "KeyQ") {
//         drumSoundLibrary.boom();
//     }
//     if (e.code == "KeyA") {
//         drumSoundLibrary.clap();
//     }
// })
// document.addEventListener("keyup", () => {
//     Array.from(drumPad).every(e => e.style.border = "solid black");
// })







// // Delay test //

// const delay = document.getElementById("delay");

// delay.addEventListener("click", ()=> {
//     if(delay.style.backgroundColor != "green") {
//         delay.style.backgroundColor = "green";
//     } else {
//     delay.style.backgroundColor = "transparent";
//     }
// })


// const stop = document.getElementById("stop") 
// stop.addEventListener("click", ()=>{
// if(stop.style.backgroundColor != "green") {
//     stop.style.backgroundColor = "green";
// } else {
// stop.style.backgroundColor = "transparent";
// }
// })
