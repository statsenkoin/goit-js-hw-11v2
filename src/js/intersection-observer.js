const observerOptions = {
  root: null,
  rootMargin: '500px',
  threshold: 1.0,
};

const paginationCheckbox = document.querySelector('.js-checkbox-pagination');
const observerTarget = document.querySelector('.js-observer-target');

paginationCheckbox.addEventListener('change', setInfinityLoad);
const observer = new IntersectionObserver(handleIntersect, observerOptions);

function setInfinityLoad() {
  console.log('paginationCheckbox.checked :>> ', paginationCheckbox.checked);
  paginationCheckbox.checked
    ? observer.observe(observerTarget)
    : observer.unobserve(observerTarget);
}

function handleIntersect(entries, observer) {
  entries.forEach(async entry => {
    //  if (entry.isIntersecting && userInput) await onLoadGallery();
    //  if (pages < page) {
    //    observer.unobserve(observerTarget);
    //  }
    console.log('entry.isIntersecting :>> ', entry.isIntersecting);
  });
}
