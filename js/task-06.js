const input = document.querySelector("#validation-input");
input.addEventListener("blur", onBlur);
function onBlur(evt) {
  input.classList.add("invalid");
  if (evt.currentTarget.value.length >= input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
