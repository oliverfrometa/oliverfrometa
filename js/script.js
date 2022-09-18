const gallery = document.querySelector(".gallery");

gallery.addEventListener("wheel", (evt) => {
    gallery.scrollLeft += evt.deltaY;
});