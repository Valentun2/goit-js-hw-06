const textStyle = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
textStyle.addEventListener("input", onInput);
function onInput(evt) {
  span.style.fontSize = `${evt.currentTarget.value}px`;
}
