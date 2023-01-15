const perPageSelector = document.querySelector('.js-per-page-selector');

perPageSelector.addEventListener('change', getImagePerPage);

export default function getImagePerPage() {
  return perPageSelector.value;
}
