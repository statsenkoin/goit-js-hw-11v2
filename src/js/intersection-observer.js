import updatePage from './update-page';
import { page, pages, userInput } from './update-page';

const observerOptions = {
  root: null,
  rootMargin: '500px',
  threshold: 1.0,
};

const paginationCheckbox = document.querySelector('.js-checkbox-pagination');
const observerTarget = document.querySelector('.js-observer-target');

paginationCheckbox.addEventListener('change', setInfinityLoad);
const observer = new IntersectionObserver(handleIntersect, observerOptions);

export function setInfinityLoad() {
  paginationCheckbox.checked
    ? observer.observe(observerTarget)
    : observer.unobserve(observerTarget);
}

function handleIntersect(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && userInput) await updatePage(userInput);
    if (pages <= page) observer.unobserve(observerTarget);
  });
}
