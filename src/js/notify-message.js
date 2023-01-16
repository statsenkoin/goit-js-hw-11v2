import { Notify } from 'notiflix';

const options = {
  width: '280px',
  position: 'left-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '40px',
  cssAnimationDuration: 800,
  cssAnimationStyle: 'from-left', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
};

export default function showMessage(data, page, pages) {
  //   const total = data.total;
  if (page === 1 && data.hits.length) {
    Notify.success(`Hooray! We found ${data.total} images.`, options);
  }
  if (!data.hits.length) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
      options
    );
  }
  if (pages === page) {
    Notify.info(
      "We're sorry, but you've reached the end of search results.",
      options
    );
  }
}
