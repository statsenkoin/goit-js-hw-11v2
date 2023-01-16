const scrollUpButton = document.querySelector('.js-scrollup-button');
scrollUpButton.addEventListener('click', onScrollUp);

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
}

function onScrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
