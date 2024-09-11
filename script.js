let timerDisplay = document.getElementById("timer");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let min = 0;
let sec = 0;
let msec = 0;
let timerId = null;

start.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
stop.addEventListener("click", function () {
  clearInterval(timerId);
});
reset.addEventListener("click", function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00:00:00`;
});
const startTimer = () => {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  let minString = min < 10 ? `0${min}` : `${min}`;
  let secString = sec < 10 ? `0${sec}` : `${sec}`;
  let msecString = msec < 10 ? `0${msec}` : `${msec}`;
  timerDisplay.innerHTML = `${minString}:${secString}:${msecString}`;
};


