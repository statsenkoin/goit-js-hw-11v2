import fetchPixabay from './fetch-pixabay';
import updateImgInfo from './update-img-info';
import markupGallery from './markup-gallery';

export default async function createMarkup(userInput, page, perPage) {
  try {
    const data = await fetchPixabay(userInput, page, perPage);
    const { hits, total } = data;
    const pages = Math.ceil(total / perPage);

    updateImgInfo(page, pages, total);
    markupGallery(hits);
  } catch {
    console.log('error :>> ', error);
  }
}
