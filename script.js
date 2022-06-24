'use strict';
const notifyBtn = document.querySelector('.pingsection1__btn');
const emailInput = document.getElementById('#email');
const text = document.querySelector('.valid');

function emailValidation() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailformat.match(emailInput.value))
{
return emailInput;
}
else {
return text.classList.remove('valid');
}};

notifyBtn.addEventListener('click', emailValidation());





