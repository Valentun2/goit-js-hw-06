const list = document.querySelector("#categories");

const elements = list.children;

console.log("Number of categories:", elements.length);
[...elements].forEach((element) =>
  console.log(`Category: ${element.firstElementChild.innerHTML}\nElements: ${element.lastElementChild.children.length}`)
);
