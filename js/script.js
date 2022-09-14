const activePage = window.location.pathname;
const navLinka = document.querySelectorAll("nav a").forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add("active")
    }
})


const scrollGallery = document.querySelector(".scroll-gallery");

scrollGallery.addEventListener("wheel", (evt) => {
    scrollGallery.scrollLeft += evt.deltaY;
});