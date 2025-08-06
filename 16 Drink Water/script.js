const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

// index of the cup we click on
function highlightCups(idx) {
  // checks if current one is full AND if the next one isn't ==> if u click on last full one, it empties it
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    // index of each one in this loop
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${
      (fullCups / totalCups) * 100
    }%`; /* percentage of filled cups */
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${
      2 - (250 * fullCups) / 1000
    }L`; /* total (2 liters) - remained in mililiters */
  }
}
