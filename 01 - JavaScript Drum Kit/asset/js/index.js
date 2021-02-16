function playmusic(event) {
  const music = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  music.currentTime = 0;
  music.play();
  key.classList.add("playing");
  // console.log(key);
}

function removeClass(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
  //   console.log(this);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeClass);
});

window.addEventListener("keydown", playmusic);

/* function playaudio(event) {
  console.log(event);
  const music = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  music.currentTime = 0;
  music.play();
  key.classList.add("playing");
}

window.addEventListener("click", playaudio); */
