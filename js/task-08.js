const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value.length === 0 || password.value.length === 0) {
    return alert("Всі поля повинні бути заповнені!");
  }

  const user = {
    email: email.value,
    password: password.value,
  };
  form.reset();
  return console.log(user);
}
