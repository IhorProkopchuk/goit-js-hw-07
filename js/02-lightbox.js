import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li>
            <a class="gallery__item" 
                href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
          </a>
          </li>`;
    })
    .join(" ");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");

console.log(galleryItems);