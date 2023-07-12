const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const container = document.querySelector("#ingredients");

const result = ingredients
  .map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li.outerHTML;
  })
  .join("");
container.insertAdjacentHTML("beforeend", result);
