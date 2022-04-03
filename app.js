const drumPad = document.getElementsByClassName("drumPad");

// drum button variables
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");



//drum noise making function
const drumMachine = function(drumSound, drumLight) {
    let audio = new Audio();
    audio.src = `sounds/${drumSound}.wav`;
    audio.play();
    drumLight.style.border = "solid red";
}

//mouse click event listeners, used "mousedown" (rather than click) and mouse mouseup/mouseleave to improve response of inputs
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

//keydowns input using switch statement to keep things tidy
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


// loop button variables
const loopBoom = document.getElementById("loopBoom");
const loopClap = document.getElementById("loopClap");
const loopHihat = document.getElementById("loopHihat");
const loopKick = document.getElementById("loopKick");
const loopOpenhat = document.getElementById("loopOpenhat");
const loopRide = document.getElementById("loopRide");
const loopSnare = document.getElementById("loopSnare");
const loopTink = document.getElementById("loopTink");
const loopTom = document.getElementById("loopTom");



// loop variables that to be used by setInterval function later
let loopingBoom = "";
let loopingClap = "";
let loopingHihat = "";
let loopingKick = "";
let loopingOpenhat = "";
let loopingRide = "";
let loopingSnare = "";
let loopingTink = "";
let loopingTom = "";

// object that assign the setInterval loops to the above variables
let drumMachineLoopObject = {
    boom: function() {
        audio = new Audio();
        audio.src = `sounds/boom.wav`;
        audio.play();
        },
    clap: function() {
        audio = new Audio();
        audio.src = `sounds/clap.wav`;
        audio.play();
        },
    hihat: function() {
        audio = new Audio();
        audio.src = `sounds/hihat.wav`;
        audio.play();
        },
    kick: function() {
        audio = new Audio();
        audio.src = `sounds/kick.wav`;
        audio.play();
        },
    openhat: function() {
        audio = new Audio();
        audio.src = `sounds/openhat.wav`;
        audio.play();
        },
    ride: function() {
        audio = new Audio();
        audio.src = `sounds/ride.wav`;
        audio.play();
        },
    snare: function() {
        audio = new Audio();
        audio.src = `sounds/snare.wav`;
        audio.play();
        },
    tink: function() {
        audio = new Audio();
        audio.src = `sounds/tink.wav`;
        audio.play();
        },
    tom: function() {
        audio = new Audio();
        audio.src = `sounds/tom.wav`;
        audio.play();
        }
}

// addEventListeners for the loop buttons
loopBoom.addEventListener("click", ()=>{
    if  (loopingBoom != "") {
        clearInterval(loopingBoom);
        loopingBoom = "";
        loopBoom.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/boom.wav`;
        audio.play();
        loopBoom.style.border = "solid red";
        loopingBoom = setInterval(drumMachineLoopObject.boom, 800);
    };
})
loopClap.addEventListener("click", ()=>{
    if  (loopingClap != "") {
        clearInterval(loopingClap);
        loopingClap = "";
        loopClap.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/clap.wav`;
        audio.play();
        loopingClap = setInterval(drumMachineLoopObject.clap, 800);
        loopClap.style.border = "solid red";
    }
});
loopHihat.addEventListener("click", ()=>{
    if  (loopingHihat != "") {
        clearInterval(loopingHihat);
        loopingHihat = "";
        loopHihat.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/hihat.wav`;
        audio.play();
        loopingHihat = setInterval(drumMachineLoopObject.hihat, 800);
        loopHihat.style.border = "solid red";
    }
});
loopKick.addEventListener("click", ()=>{
    if  (loopingKick != "") {
        clearInterval(loopingKick);
        loopingKick = "";
        loopKick.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/kick.wav`;
        audio.play();
        loopingKick = setInterval(drumMachineLoopObject.kick, 800);
        loopKick.style.border = "solid red";
    }
});
loopOpenhat.addEventListener("click", ()=>{
    if  (loopingOpenhat != "") {
        clearInterval(loopingOpenhat);
        loopingOpenhat = "";
        loopOpenhat.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/openhat.wav`;
        audio.play();
        loopingOpenhat = setInterval(drumMachineLoopObject.openhat, 800);
        loopOpenhat.style.border = "solid red";
    }
});
loopRide.addEventListener("click", ()=>{
    if  (loopingRide != "") {
        clearInterval(loopingRide);
        loopingRide = "";
        loopRide.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/ride.wav`;
        audio.play();
        loopingRide = setInterval(drumMachineLoopObject.ride, 800);
        loopRide.style.border = "solid red";
    }
});
loopSnare.addEventListener("click", ()=>{
    if  (loopingSnare != "") {
        clearInterval(loopingSnare);
        loopingSnare = "";
        loopSnare.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/snare.wav`;
        audio.play();
        loopingSnare = setInterval(drumMachineLoopObject.snare, 800);
        loopSnare.style.border = "solid red";
    }
});
loopTink.addEventListener("click", ()=>{
    if  (loopingTink != "") {
        clearInterval(loopingTink);
        loopingTink = "";
        loopTink.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/tink.wav`;
        audio.play();
        loopingTink = setInterval(drumMachineLoopObject.tink, 800);
        loopTink.style.border = "solid red";
    }
});
loopTom.addEventListener("click", ()=>{
    if  (loopingTom != "") {
        clearInterval(loopingTom);
        loopingTom = "";
        loopTom.style.border = "solid black";
    } else {
        audio = new Audio();
        audio.src = `sounds/tom.wav`;
        audio.play();
        loopingTom = setInterval(drumMachineLoopObject.tom, 800);
        loopTom.style.border = "solid red";
    }
});
