'use strict';
const notifyBtn = document.querySelector('.pingsection1__btn');
const emailInput = document.getElementById('#email');
const text = document.querySelector('.valid');

function emailValidation() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailInput.value.match(mailformat))
{
return emailInput;
}
else {
text.classList.remove('valid');
}};

notifyBtn.addEventListener('click', emailValidation());





