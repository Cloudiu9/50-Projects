// Canvas API
const canvas = document.getElementById("canvas");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const sizeEl = document.querySelector("#size");
const colorEl = document.getElementById("color");
const clearEl = document.querySelector("#clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x, y;

// click/hold mouse
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  // get where the mouse is
  x = e.offsetX;
  y = e.offsetY;
});

// release mouse
document.addEventListener("mouseup", (e) => {
  isPressed = false;

  // get where the mouse is
  x = undefined;
  y = undefined;
});

// moving mouse
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    // basically inputting a circle on every mousemove and a line to link it if mouse moves fast to create a smooth effect
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; // width of the line == radius of the circle
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 2;

  if (size > 30) {
    size = 30;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 2;

  if (size < 2) {
    size = 2;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));
clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
