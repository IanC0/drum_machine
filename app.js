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


const drumMachine = function(drumSound, drumLight) {
    let audio = new Audio();
    audio.src = `sounds/${drumSound}.wav`;
    audio.play();
    drumLight.style.border = "solid red";
}

let arr = [...drumPad]
arr.forEach((element)=>{
   element.addEventListener("mousedown", ()=> {
    drumMachine(element.id, element)
   });
   element.addEventListener("mouseup", ()=> {
    element.style.border = "solid black";
    });
    element.addEventListener("mouseleave", ()=> {
    element.style.border = "solid black";
    });
    document.addEventListener("keyup", () => {
        element.style.border = "solid black";
    }); 
});

document.addEventListener("keydown", (e) => {
    switch(e.code) {
        case "KeyA":
            drumMachine("boom", boom);
            break;
        case "KeyS":
            drumMachine("clap", clap);
            break;
        case "KeyD":
            drumMachine("hihat", hihat);
            break;
        case "KeyF":
            drumMachine("kick", kick);
            break;
        case "KeyG":
            drumMachine("openhat", openhat);
            break;
        case "KeyH":
            drumMachine("ride", ride);
            break;
        case "KeyJ":
            drumMachine("snare", snare);
            break;
        case "KeyK":
            drumMachine("tink", tink);
            break;
        case "KeyL":
            drumMachine("tom", tom);
            break;
    };
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
