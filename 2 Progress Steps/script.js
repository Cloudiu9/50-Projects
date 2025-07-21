const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  // works, but diff vers is fancier
  // if (currentActive < 4) ++currentActive;
  // console.log(currentActive);

  currentActive++;

  // caps at 4, same as above, but is dynamic
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);

  update();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) --currentActive;
  if (currentActive < 1) currentActive = 1;
  console.log(currentActive);

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // we need percentages for the css progress width
  // (actives.length / circles.length) * 100 makes it 50%, 75%, 100%, but we need 33%, 66%, 100%
  // solution: -1 both of them (need extra ())
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    // is at the beginning, can't go lower
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    // we know it's at the end, disable next
    next.disabled = true;
  } else {
    // we know neither is at the end, both enabled
    prev.disabled = false;
    next.disabled = false;
  }

  //   console.log(actives.length, circles.length); // 2 4, 3 4, etc. circles is always 4
}
