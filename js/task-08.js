const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputEmail = form.elements.email;
  const inputPassword = form.elements.password;

  if (inputEmail.value === '' || inputPassword.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  const dataForm = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  console.log(dataForm);

  form.reset();
});
