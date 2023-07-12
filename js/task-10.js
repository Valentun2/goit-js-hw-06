function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const number = document.querySelector("input");
const container = document.querySelector("#boxes");
buttonCreate.addEventListener("click", onClick);
buttonDestroy.addEventListener("click", destroyBoxes);
function onClick(evt) {
  if (number.value <= 100 && number.value >= 0) {
    createBoxes(number.value);
  }
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const result = `<style>
  .div${i}{ 
  
    width :${30 + 10 * i}px;
     height : ${30 + 10 * i}px;
      background-color:${getRandomHexColor()};
  }
  </style>
  <div class='div${i}' ></div>`;
    console.dir(result);
    container.insertAdjacentHTML("beforeend", result);
  }
}
function destroyBoxes(evt) {
  container.innerHTML = "";
}
