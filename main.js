'use strict';

function onActivateBtn(elBtn) {
  console.log(elBtn)
  elBtn.classList.toggle('active-btn')
}

function onToggleMenu() {
  document.body.classList.toggle('opened');
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

