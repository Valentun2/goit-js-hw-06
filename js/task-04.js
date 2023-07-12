const button = document.querySelector("[data-action=decrement]");
const button1 = document.querySelector("[data-action=increment]");
const num = document.querySelector("#value");
let counterValue = 0;
button.addEventListener("click", onClick);
button1.addEventListener("click", onClick);
function onClick(evt) {
  const click = evt.currentTarget;
  if (click.dataset === button.dataset) {
    counterValue -= 1;
    num.textContent = counterValue;
    return;
  } else {
    counterValue += 1;
    num.textContent = counterValue;
    return;
  }
}
