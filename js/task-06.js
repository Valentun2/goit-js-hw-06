const input = document.querySelector("#validation-input");
input.addEventListener("blur", onBlur);

function onBlur(evt) {
  input.classList.add("invalid");

  if (evt.currentTarget.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
