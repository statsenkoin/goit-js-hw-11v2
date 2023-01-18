export default function markupGallery(hits, gallery) {
  let markup = hits.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (acc += `<div class="card-wrapper">
      <a href="${largeImageURL}">
        <img 
          class="card-image" 
          src="${webformatURL}" 
          alt="${tags}" 
          loading="lazy"
          title="Open slide show"
        />
      </a>
      <div class="card-info" title="Add to favourite">
        <p class="info-item">
          <i class="fa fa-regular fa-heart"></i>
          ${likes}
        </p>
        <p class="info-item">
          <i class="fa fa-regular fa-eye"></i>
          ${views}
        </p>
        <p class="info-item">
          <i class="fa fa-regular fa-comments"></i>
          ${comments}
        </p>
        <p class="info-item">
          <i class="fa fa-regular fa-download"></i>
          ${downloads}
        </p>
      </div>
    </div>
    `);
    },
    ``
  );
  gallery.insertAdjacentHTML('beforeend', markup);
}
// <i class="fa-solid fa-heart"></i>
