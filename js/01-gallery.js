import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryEl.addEventListener("click", modalOpen);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
    .join(" ");
}

function modalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", onEscape);
  function onEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
