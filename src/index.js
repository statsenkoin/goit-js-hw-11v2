import fetchPixabay from './js/fetch-pixabay';
import updateImgInfo from './js/update-img-info';
import markupGallery from './js/markup-gallery';
import showMessage from './js/notify-message';
import scrollGallery from './js/scroll_gallery';
import { simpleLightbox } from './js/simple_lightbox';
import './js/scrollup-button';

let userInput = '';
let page = 1;
let pages = 1;
let perPage = 24;
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
perPageSelector.addEventListener('change', getPerPageValue);
buttonCardPlus.addEventListener('click', updatePage);

const observer = new IntersectionObserver(handleIntersect, observerOptions);

async function onFormSubmit(event) {
  event.preventDefault();
  const newUserInput = event.currentTarget.elements.searchQuery.value.trim();
  if (userInput !== newUserInput) {
    userInput = newUserInput;
    resetPage();
    observer.unobserve(observerTarget);
  }
  if (userInput && pages >= page) {
    paginationCheckbox.checked
      ? observer.observe(observerTarget)
      : await updatePage();
  }
}

// ===== resetPage =====

async function updatePage() {
  try {
    const data = await fetchPixabay(userInput, page, perPage);
    const { hits, total } = data;
    pages = Math.ceil(total / perPage);

    updateImgInfo(page, pages, total);
    showMessage(data, page, pages);
    markupGallery(hits, gallery);

    gallery.append(buttonCardPlus);
    buttonCardPlus.hidden = false;

    if (page > 1 && !paginationCheckbox.checked) scrollGallery(gallery);

    simpleLightbox.refresh();

    page += 1;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

function resetPage() {
  page = 1;
  pages = 1;
  perPage = getPerPageValue();
  gallery.innerHTML = '';
}

function getPerPageValue() {
  return perPageSelector.value;
}

// ===== observer =====

function setInfinityLoad() {
  paginationCheckbox.checked
    ? observer.observe(observerTarget)
    : observer.unobserve(observerTarget);
}

function handleIntersect(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && userInput) await updatePage();
    if (pages < page) observer.unobserve(observerTarget);
  });
}
