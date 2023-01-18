const modal = document.getElementById('myModal');
const modalOpen = document.querySelector('.gallery');
const modalClose = document.querySelector('.js-modal-close');

modalOpen.addEventListener('click', onModalOpen);
modalClose.addEventListener('click', onModalClose);

function onModalOpen() {
  modal.style.display = 'block';
}

function onModalClose() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) {
    onModalClose();
  }
};
