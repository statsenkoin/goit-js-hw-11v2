import './js/intersection-observer';
// import { setInfinityLoad } from './js/intersection-observer';

import getImagePerPage from './js/set-search-options';
import createMarkup from './js/create-markup';

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', onFormSubmit);

let userInput = '';
let page = 1;
// let pages = 1;
let perPage = 24;
// let isInfinityLoad = false;

async function onFormSubmit(event) {
  event.preventDefault();
  perPage = getImagePerPage();
  // isInfinityLoad = setInfinityLoad();
  // setInfinityLoad();

  userInput = event.currentTarget.elements.searchQuery.value.trim();

  await createMarkup(userInput, page, perPage);
  page += 1;
}
