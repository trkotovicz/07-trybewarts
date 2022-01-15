const login = document.querySelector('#email');
const password = document.querySelector('#password');
const btnEntrar = document.querySelector('#btn-entrar');
const agreementBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');

function emailAlert() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function sendAgreement() {
  const agreed = agreementBox.checked;
  if (agreed === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

function characterCounter() {
  const text = textarea.value;
  const counter = document.querySelector('#counter');

  counter.innerText = 500 - text.length;
}

function callEvent() {
  btnEntrar.addEventListener('click', emailAlert);
  agreementBox.addEventListener('change', sendAgreement);
  textarea.addEventListener('input', characterCounter);
}
callEvent();
