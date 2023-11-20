//Isabelle Anno 4/22/2022

//Declare variables

//buttons
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let pauseBtn = document.getElementById("pause");

//time
hour = document.getElementById("h");
minute = document.getElementById("m");
second = document.getElementById("s");

//add event listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", done);
pauseBtn.addEventListener("click", pause);

//initialize stop and pause booleans- becomes true when button clicks
var done = false;
var pause = false;

function start() {
  let h = parseInt(hour.innerHTML);
  let m = parseInt(minute.innerText);
  let s = parseInt(second.innerText);

  //increment seconds
  s = s + 1;
  if (s === 59) {
    s = 0;
    if (m === 59) {
      m = 0;
      h = h + 1;
      console.log(h);
      hour.innerHTML = h + "h";
    }
    m = m + 1;
    minute.innerText = m + "m";
  }
  if (!done) {
    if (!pause) {
      second.innerText = s + "s";
      setTimeout(start, 5);
    } else {
      pause = !pause;
    }
  } else {
    done = !done;
  }
}

function done() {
  done = true;
  second.innerText = 0 + "s";
  minute.innerText = 0 + "m";
  hour.innerText = 0 + "h";
}
function pause() {
  pause = true;
}
