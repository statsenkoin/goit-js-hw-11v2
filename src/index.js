import fetchPixabay from './js/fetch-pixabay';

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', onFormSubmit);

let userInput = '';
let page = 1;
let pages = 1;
const perPage = 23;

async function onFormSubmit(event) {
  event.preventDefault();
  userInput = event.currentTarget.elements.searchQuery.value.trim();
  console.log('userInput :>> ', userInput);

  getData();
}

async function getData() {
  try {
    const resp = await fetchPixabay(userInput, page, perPage);
    console.log('resp :>> ', resp);
  } catch {
    console.log('error :>> ', error);
  }
}
