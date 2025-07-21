const jokeEl = document.getElementById("joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// .then works, but async await is cleaner
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://www.icanhazdadjoke.com", config)
//     .then((res) => {
//       res.json();
//     })
//     .then((data) => (jokeEl.innerHTML = data.joke));
// }
