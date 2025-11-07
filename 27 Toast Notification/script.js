const button = document.querySelector("#button");
const toasts = document.querySelector("#toasts");

const messages = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nam.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates rerum obcaecati, accusantium consequuntur molestias quasi.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi.",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

const createNotification = function (message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
};

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
