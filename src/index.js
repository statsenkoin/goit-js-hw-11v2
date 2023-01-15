import './js/intersection-observer';
// import { setInfinityLoad } from './js/intersection-observer';

// import getImagePerPage from './js/set-search-options';
import updatePage from './js/update-page';
import { cleanMarkup } from './js/markup-gallery';

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', onFormSubmit);

// let userInput = '';
// let page = 1;
// let pages = 1;
// let perPage = 24;

// export { userInput, page, pages, perPage };
// export { userInput };

async function onFormSubmit(event) {
  event.preventDefault();
  // perPage = getImagePerPage();
  // isInfinityLoad = setInfinityLoad();

  const userInput = event.currentTarget.elements.searchQuery.value.trim();
  // const newUserInput = event.currentTarget.elements.searchQuery.value.trim();
  // if (userInput !== newUserInput) {
  //   userInput = newUserInput;
  //   // pages = 1;
  //   // page = 1;
  //   cleanMarkup();
  // }

  await updatePage(userInput);
  // page += 1;
}
