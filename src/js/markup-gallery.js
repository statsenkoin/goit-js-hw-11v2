export default function markupGallery(hits, gallery) {
  let markup = hits.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (acc += `<div>
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
