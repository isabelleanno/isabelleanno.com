//Isabelle Anno, 4/28/2022 https://youtu.be/UHF4JQmwgAk
//I have no idea why mine's not working... I'm testing on Chrome.

function playSound(e) {
  const audio = document.querySelector(`audio [data-key="${e.keyCode}"]`);
  const key = document.querySelector(`key [data-key="${e.keyCode}"]`);
  if (!audio) {
    console.log("No sound for this key."); //This always happens because "audio" is always null, so it never works for me... :(
    return;
  }
  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(this);
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);
//keyCode is outdated/deprecated. I always get null in the console if I console.log audio.
// if I do .key  or .code instead, it still gives me null in the console. Maybe the code for this
//exercise needs to be updated?
//please see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
