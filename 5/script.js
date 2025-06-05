const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30); /* runs every 30miliseconds */

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int); /* stops at 100 */
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(
    load,
    0,
    100,
    1,
    0
  ); /* changes opacity from 1 (visible) to 0 (invisible) depending on the load variable's values from 0 to 100 */

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
