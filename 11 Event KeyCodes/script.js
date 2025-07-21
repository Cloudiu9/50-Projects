const keyCon = document.querySelectorAll(".key");
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `        <div class="key">
          ${e.key === " " ? "Space" : e.key}
          <small>event.key</small>
        </div>
        <div class="key">
          ${e.keyCode}
          <small id="keyCode">event.keyCode</small>
        </div>
        <div class="key">
          ${e.code}
          <small id="code">event.code</small>
        </div>`;
});

// console.log(keyCon);

// keyCon.forEach((con) => {
//   console.log(con.children);
//   con.classList.add("hidden");
//   window.addEventListener("keydown", () => {
//     con.classList.remove("hidden");
//   });
// });

// keyCon[3].classList.remove("hidden");
