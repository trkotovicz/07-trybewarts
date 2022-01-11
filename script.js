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
//   for (const i = 0; i < valueRadio.length; += i) {
//     createRadio.createElement('input')   
//   }
// }

function callEvent() {
  btnEntrar.addEventListener('click', emailAlert);
}
callEvent();
