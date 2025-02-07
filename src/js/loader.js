const loderEl = document.querySelector(".loader");
const loaderContainer = document.querySelector(".loader-container");

const loaderToggle = (info) => {
    if (info) {
        loderEl.classList.remove("visually-hidden");
        loaderContainer.classList.remove("visually-hidden");
    } else {
        loderEl.classList.add("visually-hidden");
        loaderContainer.classList.add("visually-hidden");
    }
};

export default loaderToggle;

