import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const createGaleryItem = (galleryItems) => {
 return galleryItems.map(({ preview, original, description}) => {
    return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join("")
};

const galeryItemMarkup = createGaleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galeryItemMarkup);




const onGalleryElClick = (e) =>{
    e.preventDefault();
    

    if (!e.target.classList.contains("gallery__image")) {
        return
    }

    var lightbox = new SimpleLightbox('.gallery a', { captionsData:  "alt",
    captionDelay: 250 });

}

galleryEl.addEventListener("click", onGalleryElClick);