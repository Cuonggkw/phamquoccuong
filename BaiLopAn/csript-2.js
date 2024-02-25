const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hiden');
  overlay.classList.remove('hiden');
};

const closeModal = function () {
  modal.classList.add('hiden');
  overlay.classList.add('hiden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log('Bạn đã nhấn vào bàn phím');
//   if (e.key === 'Enter' && !modal.classList.contains('hiden')) {
//     closeModal();
//   }
// });

// const user = {
//   name: 'Cường',
//   class: '22C7-LTM1',
// };
// console.log(Object.keys(user));

// CÁCH 2:

// for (let i = 0; i < btnOpenModal.length; i++) {
//   const openModal = function () {
//     modal.classList.remove('hiden');
//     overlay.classList.remove('hiden');
//   };
//   btnOpenModal[i].addEventListener('click', openModal);
// }

// // Hiện lại ko cần vòng lặp

// const closeModal = function () {
//   modal.classList.add('hiden');
//   overlay.classList.add('hiden');
// };
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);
