import { getPicture } from './js/pixibay-api.js';
import { showSearchResults } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  searchForm: document.querySelector('.search-form'),
  input: document.querySelector('.search-input'),
  gallery: document.querySelector('.card-container'),
  loader: document.querySelector('.loader'),
};

elements.searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  elements.gallery.innerHTML = '';
  const searchImg = elements.input.value.trim();
  elements.loader.classList.remove('visually-hidden');
  if (searchImg === '') {
    iziToast.error({
      iconUrl: './img/error.svg',
      message: 'Search field cannot be empty!',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: 'white',
      titleColor: 'white',
    });
    elements.loader.classList.add('visually-hidden');
    return;
  }

  getPicture(searchImg)
    .then(data => {
      elements.loader.classList.remove('visually-hidden');
      elements.input.value = '';
      if (data.length === 0) {
        iziToast.error({
          iconUrl: './img/error.svg',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: 'white',
          titleColor: 'white',
        });
      } else {
        elements.gallery.innerHTML = showSearchResults(data);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      iziToast.error({
        iconUrl: './img/error.svg',
        message:
          'An error occurred while fetching the images. Please try again later.',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: 'white',
        titleColor: 'white',
      });
    })
    .finally(() => elements.loader.classList.add('visually-hidden'));
}

const lightbox = new simpleLightbox('.card-container a', {
  captionsData: 'alt',
  captionDelay: 250,
});
