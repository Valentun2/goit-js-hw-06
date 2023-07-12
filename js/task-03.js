const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const container = document.querySelector(".gallery");
container.style.display = "flex";
container.style.gap = "10px";
const result = images
  .map(
    ({ url, alt }) => `<style>
.item {
  list-style: none;
}
img{
  display: block
}
  </style>
  <li class= 'item'><img src="${url}" alt="${alt}" width='300' height='250'>
  </li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", result);
console.log(result);
