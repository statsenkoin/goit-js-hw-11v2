import fetchPixabay from './js/fetch-pixabay';
import updateImgInfo from './js/update-img-info';
import markupGallery from './js/markup-gallery';
import showMessage from './js/notify-message';
import scrollGallery from './js/scroll_gallery';
import { simpleLightbox } from './js/simple_lightbox';
import './js/scrollup-button';

let userInput = '';
let page = 0;
let pages = 0;
let perPage = 0;
const observerOptions = {
  root: null,
  rootMargin: '500px',
  threshold: 1.0,
};

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.js-gallery');
const paginationCheckbox = document.querySelector('.js-checkbox-pagination');
const observerTarget = document.querySelector('.js-observer-target');
const perPageSelector = document.querySelector('.js-per-page-selector');
const buttonCardPlus = document.querySelector('.js-card-plus');

searchForm.addEventListener('submit', onFormSubmit);
paginationCheckbox.addEventListener('change', setInfinityLoad);
perPageSelector.addEventListener('change', updatePerPageValue);
buttonCardPlus.addEventListener('click', updateMarkup);

const observer = new IntersectionObserver(handleIntersect, observerOptions);

async function onFormSubmit(event) {
  event.preventDefault();
  const newUserInput = event.currentTarget.elements.searchQuery.value.trim();
  if (userInput !== newUserInput) {
    userInput = newUserInput;
    resetMarkup();
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
    const { hits, total } = data;

    perPage = getPerPageValue();
    pages = Math.ceil(total / perPage);

    if (page === 1) {
      gallery.innerHTML = '';
    }
    updateImgInfo(page, pages, total);
    showMessage(data, page, pages);
    buttonCardPlus.hidden = true;
    markupGallery(hits, gallery);
    toggleSearchButton();

    if (pages > page && !paginationCheckbox.checked) {
      // gallery.append(buttonCardPlus);
      buttonCardPlus.hidden = false;
    } else {
      buttonCardPlus.hidden = true;
    }

    if (page > 1 && !paginationCheckbox.checked) scrollGallery(gallery);

    simpleLightbox.refresh();

    page += 1;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

function resetMarkup() {
  page = 1;
  pages = 1;
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
}

function toggleSearchButton() {
  const spinner1 = `<i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>`;
  const spinner2 = `<i class="fa fa-spinner fa-pulse fa-2x" aria-hidden="true"></i>`;
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
  } else {
    buttonCardPlus.hidden = false;
  }
}

function handleIntersect(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && userInput) await updateMarkup();
    if (pages < page) observer.unobserve(observerTarget);
  });
}
