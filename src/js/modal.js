const modal = document.getElementById('myModal');
const modalOpen = document.querySelector('.gallery');
const modalClose = document.querySelector('.js-modal-close');
const modalContent = document.querySelector('.js-modal-content');
let modalForm;
let imageId;

modalOpen.addEventListener('click', onModalOpen);
modalClose.addEventListener('click', onModalClose);

function onModalOpen(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscClose);
  modalContent.innerHTML = '';

  let markup = '';
  const info = event.target.closest('.card-info');
  const image = event.target.classList.contains('card-image');
  const wrapper = event.target.closest('.card-wrapper');

  if (!image && !info) return;
  if (image) {
    const imageUrl = event.target.closest('.card-link').href;

    markup = `<img src="${imageUrl}" alt="image" class="modal-large-image" />`;

    modalContent.insertAdjacentHTML('beforeend', markup);
  }
  if (info) {
    imageId = wrapper.id;
    const imageUrl = wrapper.firstElementChild.firstElementChild.src;
    const imageLikes = info.children[0].textContent.trim();
    const imageViews = info.children[1].textContent.trim();
    const imageComments = info.children[2].textContent.trim();
    const imageDownloads = info.children[3].textContent.trim();

    markup = `
      <img src="${imageUrl}" alt="image" class="modal-image"/>
      <div class="modal-info">
        <p class="modal-likes"><b>Likes:</b> ${imageLikes}</p>
        <p class="modal-views"><b>Views:</b> ${imageViews}</p>
        <p class="modal-comments"><b>Comments:</b> ${imageComments}</p>
        <p class="modal-downloads"><b>Downloads:</b> ${imageDownloads}</p>
        <form class="modal-form">
          <label class="modal-text-label"><b>Add comment:</b>
            <textarea class="modal-text" name="comment" cols="30" rows="10"></textarea>
          </label>
          <label><input type="checkbox" name="favourite"><b>Add to favourites</b></label>
          <button class="modal-submit" name="submit" type="submit" disabled>Submit</button>
        </form>
      </div>
      `;
    modalContent.insertAdjacentHTML('beforeend', markup);
    modalForm = document.querySelector('.modal-form');
    modalForm.addEventListener('submit', onModalFormSubmit);
    modalForm.favourite.addEventListener('change', onModalFavouriteCheck);
  }
  modal.style.display = 'block';
}

function onModalFavouriteCheck() {
  modalForm.submit.disabled = modalForm.favourite.checked ? false : true;
}

function onModalFormSubmit(event) {
  event.preventDefault();
  console.log('imageId :>> ', imageId);
  console.log('modalForm.comment.value :>> ', modalForm.comment.value);
  onModalClose();
}

function onModalClose() {
  modal.style.display = 'none';
  window.removeEventListener('keydown', onEscClose);
  modalForm.removeEventListener('submit', onModalFormSubmit);
  modalForm.favourite.removeEventListener('change', onModalFavouriteCheck);
}

window.onclick = function (event) {
  if (event.target == modal) {
    onModalClose();
  }
};

function onEscClose(e) {
  if (e.code === 'Escape') onModalClose();
}
