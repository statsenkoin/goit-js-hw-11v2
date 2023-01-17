import fetchPixabay from './js/fetch-pixabay';
import updateImgInfo from './js/update-img-info';
import markupGallery from './js/markup-gallery';
import showMessage from './js/notify-message';
import scrollGallery from './js/scroll_gallery';
import { simpleLightbox } from './js/simple_lightbox';
import './js/scrollup-button';
import { showPagination } from './js/custom-pagination';

let userInput = '';
let page = 0;
let pages = 0;
let perPage = 0;
const observerOptions = {
  root: null,
  rootMargin: '500px',
  threshold: 1.0,
};
let isPaginationButtonClick = false;

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.js-gallery');
const paginationCheckbox = document.querySelector('.js-checkbox-pagination');
const observerTarget = document.querySelector('.js-observer-target');
const perPageSelector = document.querySelector('.js-per-page-selector');
const buttonCardPlus = document.querySelector('.js-card-plus');
const pagination = document.querySelector('.pagination');

searchForm.addEventListener('submit', onFormSubmit);
paginationCheckbox.addEventListener('change', setInfinityLoad);
perPageSelector.addEventListener('change', updatePerPageValue);
buttonCardPlus.addEventListener('click', updateMarkup);
pagination.addEventListener('click', onPaginationButtonClick);

const observer = new IntersectionObserver(handleIntersect, observerOptions);

async function onFormSubmit(event) {
  event.preventDefault();
  const newUserInput = event.currentTarget.elements.searchQuery.value.trim();
  if (userInput !== newUserInput) {
    userInput = newUserInput;
    resetMarkup();
    pages = 1;
    observer.unobserve(observerTarget);
  }
  if (userInput && pages >= page) {
    paginationCheckbox.checked
      ? observer.observe(observerTarget)
      : await updateMarkup();
  }
}

// ===== resetMarkup =====

async function updateMarkup() {
  try {
    toggleSearchButton();
    const data = await fetchPixabay(userInput, page, perPage);
    const { hits, totalHits } = data;

    perPage = getPerPageValue();
    pages = Math.ceil(totalHits / perPage);

    if (page === 1) {
      gallery.innerHTML = '';
    }
    updateImgInfo(page, pages, totalHits);
    showMessage(data, page, pages);
    buttonCardPlus.hidden = true;

    markupGallery(hits, gallery);
    toggleSearchButton();
    pagination.innerHTML = '';
    showPagination(page, pages, pagination);

    if (pages > page && !paginationCheckbox.checked) {
      buttonCardPlus.hidden = false;
    } else {
      buttonCardPlus.hidden = true;
    }

    if (page > 1 && !paginationCheckbox.checked && !isPaginationButtonClick)
      scrollGallery(gallery);

    simpleLightbox.refresh();

    page += 1;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

function resetMarkup() {
  page = 1;
  perPage = getPerPageValue();
  gallery.innerHTML = '';
}

function getPerPageValue() {
  return perPageSelector.value;
}

function updatePerPageValue() {
  const newPerPage = perPageSelector.value;
  if (perPage !== newPerPage) {
    page = Math.floor((perPage * (page - 1)) / newPerPage) + 1;
  }
  perPage = newPerPage;
  updateMarkup();
}

function toggleSearchButton() {
  const spinner1 = `<i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>`;
  const spinner2 = `<i class="fa fa-spinner fa-pulse fa-x" aria-hidden="true"></i>`;
  const search = `<i class="fa fa-search"></i>`;
  const loadMore = `Load more...`;

  searchForm.searchButton.innerHTML =
    searchForm.searchButton.innerHTML === spinner1 ? search : spinner1;
  buttonCardPlus.innerHTML =
    buttonCardPlus.innerHTML === spinner2 ? loadMore : spinner2;
}

// ===== observer =====

function setInfinityLoad() {
  paginationCheckbox.checked
    ? observer.observe(observerTarget)
    : observer.unobserve(observerTarget);
  if (
    paginationCheckbox.checked ||
    (!paginationCheckbox.checked && page === 0)
  ) {
    buttonCardPlus.hidden = true;
    pagination.hidden = true;
  } else {
    buttonCardPlus.hidden = false;
    pagination.hidden = false;
  }
}

function handleIntersect(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && userInput) await updateMarkup();
    if (pages < page) observer.unobserve(observerTarget);
  });
}

// ===== pagination =====

async function onPaginationButtonClick(event) {
  const targetPage = event.target.textContent;
  if (targetPage !== '...') {
    isPaginationButtonClick = true;
    pagination.innerHTML = '';
    buttonCardPlus.hidden = true;
    resetMarkup();

    console.log('pages :>> ', pages);

    if (!isNaN(Number(targetPage))) page = Number(targetPage);
    if (targetPage === '>') page = pages;
    if (targetPage === '<') page = 1;

    await updateMarkup();
    isPaginationButtonClick = false;
  }
}
