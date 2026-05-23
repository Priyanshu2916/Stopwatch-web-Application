let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const laps = document.getElementById("laps");

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = h + ":" + m + ":" + s;
}

function stopwatch() {

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

startBtn.addEventListener("click", () => {

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
});

pauseBtn.addEventListener("click", () => {

    clearInterval(timer);
});

resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    laps.innerHTML = "";
});

lapBtn.addEventListener("click", () => {

    if(hours === 0 && minutes === 0 && seconds === 0){
        return;
    }

    const li = document.createElement("li");

    li.innerText = display.innerText;

    laps.appendChild(li);
});

updateDisplay();