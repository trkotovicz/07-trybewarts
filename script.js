const login = document.querySelector('#email');
const password = document.querySelector('#password');
const btnEntrar = document.querySelector('#btn-entrar');
const labelRadio = document.querySelector('#label-rate');

function emailAlert() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// function evaluator() {
//   const valueRadio = 10;
//   const createRadio = '';
//   for (let i = 0; i < valueRadio.length; i += 1) {
//     createRadio.createElement('input');
//     createRadio.setAttribute('type', 'radio');
//     createRadio.setAttribute('name', 'rate');
//     labelRadio.appendChild(createRadio);
//   }
// }
// evaluator();

function callEvent() {
  btnEntrar.addEventListener('click', emailAlert);
}
callEvent();
