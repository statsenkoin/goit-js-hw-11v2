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
// perPageSelector.addEventListener('change', getPerPageValue);
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
  page = updatePageValue();
  perPage = updatePerPageValue();

  try {
    const data = await fetchPixabay(userInput, page, perPage);
    const { hits, total } = data;

    perPage = getPerPageValue();
    pages = Math.ceil(total / perPage);

    updateImgInfo(page, pages, total);
    showMessage(data, page, pages);
    markupGallery(hits, gallery);

    if (pages > page) {
      gallery.append(buttonCardPlus);
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
  const newPerPage = getPerPageValue();
  return page === 1 ? newPerPage - 1 : newPerPage;
}

function updatePageValue() {
  const newPerPage = getPerPageValue();

  console.log('perPage :>> ', perPage);
  console.log('newPerPage :>> ', newPerPage);
  console.log('page in :>> ', page);

  if (perPage !== newPerPage) {
    page = Math.floor((perPage * page) / newPerPage) + 1;
  }
  console.log('page out :>> ', page);

  return page;
}

// ===== observer =====

function setInfinityLoad() {
  paginationCheckbox.checked
    ? observer.observe(observerTarget)
    : observer.unobserve(observerTarget);
}

function handleIntersect(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && userInput) await updateMarkup();
    if (pages < page) observer.unobserve(observerTarget);
  });
}
