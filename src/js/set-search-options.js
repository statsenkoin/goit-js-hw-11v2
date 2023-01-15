const perPageSelector = document.querySelector('.js-per-page-selector');
const paginationCheckbox = document.querySelector('.js-checkbox-pagination');

perPageSelector.addEventListener('change', getImagePerPage);
paginationCheckbox.addEventListener('change', setInfinityLoad);

export function getImagePerPage() {
  return perPageSelector.value;
}

export function setInfinityLoad() {
  return paginationCheckbox.checked;
}
