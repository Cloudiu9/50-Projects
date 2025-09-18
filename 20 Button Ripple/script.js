const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    /* where we click on the viewport */
    const x = e.clientX;
    const y = e.clientY;

    /* offsetTop => where it starts on the top */
    // position of the button itself, same coords on all clicks
    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    /* coords where we click relative to the btn */
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = `${xInside}px`;
    circle.style.top = `${yInside}px`;

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  });
});
