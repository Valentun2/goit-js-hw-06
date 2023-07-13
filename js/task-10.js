function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const number = document.querySelector("input");
const container = document.querySelector("#boxes");
buttonCreate.addEventListener("click", onClick);
buttonDestroy.addEventListener("click", destroyBoxes);
function onClick(evt) {
  if (number.value > 100 || number.value < 1) {
    return alert("Введіть число від 1 до 100");
  }
  createBoxes(number.value);
}
const createBoxes = (amount) => {
  let total = ``;

  for (let i = 1; i <= amount; i++) {
    const result = `
  <div class='div${i}' style="width: ${20 + 10 * i}px;
   height: ${20 + 10 * i}px; 
      background-color: ${getRandomHexColor()}"' >
      </div>`;
    total = total + `${result}`;
  }
  return container.insertAdjacentHTML("beforeend", total);
};
function destroyBoxes(evt) {
  container.innerHTML = "";
  number.value = "";
}
