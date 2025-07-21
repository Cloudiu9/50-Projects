const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split() /* splitting text into an array, each letter separately */
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    ) /* create an array with a span around it */
    .join(""); /* turn back from array to string */
});
