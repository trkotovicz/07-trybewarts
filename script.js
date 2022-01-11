const login = document.querySelector('#email');
const password = document.querySelector('#password');
const btnEntrar = document.querySelector('#btn-entrar');

function emailAlert() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function callEvent() {
  btnEntrar.addEventListener('click', emailAlert);
}
callEvent();
