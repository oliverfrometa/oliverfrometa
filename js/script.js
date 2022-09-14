const scrollGallery = document.querySelector(".scroll-gallery");

scrollGallery.addEventListener("wheel", (evt) => {
    scrollGallery.scrollLeft += evt.deltaY;
});