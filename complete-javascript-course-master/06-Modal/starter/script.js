'use strict';

// Add HTML classes to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Remove the hidden class on click and store it in 'openModal' variable as a function.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Add the hidden class and store it in 'closeModal' variable as a  function.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Cycles through all instances of classes with 'show-modal'. Open them on click
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//close instances of 'show-modal' class on click.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Log the pressed key using 'keydown', passing an argument (e/event) inside the function.
document.addEventListener('keydown', function (e) {
  console.log('A key was pressed');
  console.log(e.key);
  // If the pressed key is 'Escape', and the 'hidden' class is NOT present, close the modal using the escape key.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
