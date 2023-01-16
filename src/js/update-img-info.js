const imageInfo = document.querySelector('.js-images-info');

export default function updateImgInfo(page, pages, total) {
  let info = `Page: ${page}/${pages}. Total images: ${total}`;
  if (total === 0) {
    info =
      'Sorry, there are no images matching your search query. Please try again.';
  }
  imageInfo.textContent = info;
}
