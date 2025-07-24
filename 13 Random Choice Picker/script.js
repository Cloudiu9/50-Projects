const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");

textarea.focus(); // auto focus on it (start typing immediately)

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value); // whatever we type in

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""; // clear textarea
    }, 10);

    randomSelect();
  }
});

const createTags = function (input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim()); // cant be empty string, remove all whitespaces

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

function randomSelect() {
  const times = 30;

  // highlights and unhighlights the tags
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // takes care of stopping the random selection and picks one
  setTimeout(() => {
    clearInterval(interval); // stop interval ^^^

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

const pickRandomTag = function () {
  const tags = document.querySelectorAll(".tag"); // nodelist, similar to array

  return tags[Math.floor(Math.random() * tags.length)];
};

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
