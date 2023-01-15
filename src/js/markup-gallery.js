const gallery = document.querySelector('.js-gallery');

export function cleanMarkup() {
  gallery.innerHTML = '';
}

export function markupGallery(data) {
  let markup = data.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (acc += `<div class="photo-card">
      <a href="${largeImageURL}">
        <img 
          class="card-image" 
          src="${webformatURL}" 
          alt="${tags}" 
          loading="lazy"
        />
      </a>
    </div>
    `);
    },
    ``
  );
  gallery.insertAdjacentHTML('beforeend', markup);
}
