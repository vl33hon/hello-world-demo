const helloButton = document.querySelector("#hello-button");
const response = document.querySelector("#response");
let hasSaidHello = false;

helloButton.addEventListener("click", () => {
  hasSaidHello = !hasSaidHello;
  response.textContent = hasSaidHello
    ? "Hello right back. Glad you're here!"
    : "Your turn. Give it a click.";
  helloButton.querySelector("span").textContent = hasSaidHello ? "✓" : "↗";
  helloButton.lastChild.textContent = hasSaidHello ? "Say hello again" : "Say hello";
});
