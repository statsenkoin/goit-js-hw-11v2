import fetchPixabay from './fetch-pixabay';
import updateImgInfo from './update-img-info';
import { markupGallery } from './markup-gallery';

import { cleanMarkup } from './markup-gallery';
import getImagePerPage from './set-search-options';
import { setInfinityLoad } from './intersection-observer';

let page = 0;
let pages = 0;
let perPage = 0;
let userInput = '';

export { page, pages, userInput };

export default async function createMarkup(input) {
  if (userInput !== input) {
    userInput = input;
    page = 0;
    cleanMarkup();
  }
  perPage = getImagePerPage();
  try {
    page += 1;
    const data = await fetchPixabay(userInput, page, perPage);
    const { hits, total } = data;
    pages = Math.ceil(total / perPage);
    if (pages > 1) setInfinityLoad();
    updateImgInfo(page, pages, total);
    markupGallery(hits);
  } catch {
    console.log('error :>> ', error);
  }
}
