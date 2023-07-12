const userName = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
userName.addEventListener("input", onInput);

function onInput(evt) {
  span.textContent = evt.currentTarget.value;
}
