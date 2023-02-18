import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const createGaleryItem = (galleryItems) => {
 return galleryItems.map(({ preview, original, description}) => {
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
    </div>`
}).join("")
};

const galeryItemMarkup = createGaleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galeryItemMarkup);

const onGalleryElClick = (e) =>{
    e.preventDefault();
    

    if (!e.target.classList.contains("gallery__image")) {
        return
    }

    const keydownEventHandler =(e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    }

    const currentImageHref = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${currentImageHref}" width ="800" height="600">
    `, {
        onShow: () => window.addEventListener("keydown", keydownEventHandler),
        onClose: () => window.removeEventListener("keydown", keydownEventHandler),
    });

    instance.show()
}

galleryEl.addEventListener("click", onGalleryElClick);

