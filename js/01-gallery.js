import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join('');
}

galleryContainer.addEventListener('click', event => {
  event.preventDefault();

  document.querySelector('.gallery').onclick = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
  };
});
