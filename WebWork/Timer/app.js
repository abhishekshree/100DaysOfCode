const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const start = document.querySelector(".start-timer");
const pauseButton = document.querySelector(".pause-timer");
const reset = document.querySelector(".stop-timer");

let hour = 0;
let minute = 0;
let second = 0;

start.addEventListener('click', startIt);
pauseButton.addEventListener('click', pause);
reset.addEventListener('click', stopFunction)

function startIt(){
    start.classList.add("unclickable");
    pauseButton.classList.remove("unclickable");
    timer();
}

function begin() {
    if (second == 59) {
        second = 0;
        minute += 1;
    } else {
        second += 1;
    }
    if (minute == 60) {
        hour += 1;
        minute *= 0;
    }
    hours.innerText = (hour > 9 ? hour : "0" + hour.toString());
    minutes.innerText = (minute > 9 ? minute : "0" + minute.toString());
    seconds.innerText = (second > 9 ? second : "0" + second.toString());
    timer();
}

let t;

function timer() {
    t = setTimeout(begin, 1000);
}

function pause(){
    clearInterval(t);
    start.classList.remove("unclickable");
    pauseButton.classList.add("unclickable");
}

function stopFunction(){
    start.classList.remove("unclickable");
    pauseButton.classList.remove("unclickable");
    clearInterval(t);
    hour = 0, minute = 0, second = 0;
    hours.innerText = (hour > 9 ? hour : "0" + hour.toString());
    minutes.innerText = (minute > 9 ? minute : "0" + minute.toString());
    seconds.innerText = (second > 9 ? second : "0" + second.toString());
}