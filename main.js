'use strict';

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

function toggleModal() {
  if (document.body.classList.contains('modal-open')) {
    document.querySelector('.popup-modal').style.display = 'none';
    document.body.classList.toggle('modal-open');
    return;
  }
  document.querySelector('.popup-modal').style.display = 'block';
  document.body.classList.toggle('modal-open');
}

function onDropDownMenu() {
  let elDropMenu = document.querySelector('.drop-down-menu');

  if (elDropMenu.style.display === 'none') {
    elDropMenu.style.display = 'block';
    return;
  }
  elDropMenu.style.display = 'none';
}
