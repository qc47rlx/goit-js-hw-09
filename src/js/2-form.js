'use strict';

const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.elements.email;
const message = feedbackForm.elements.message;

const previousData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (previousData === null) {
  email.value = '';
  message.value = '';
} else {
  email.value = previousData.email;
  message.value = previousData.message;
}

feedbackForm.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage(event) {
  const form = event.currentTarget;
  const inputData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
  }
});