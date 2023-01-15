const imageInfo = document.querySelector('.js-images-info');

export default function updateImgInfo(page, pages, total) {
  let info = `Page: ${page}/${pages}. Total images: ${total}`;
  imageInfo.textContent = info;
}
