const searchEl = document.getElementById("search");

searchEl.addEventListener("input", () => {
    countCards.innerHTML = ""; 

    const search = searchEl.value.toLowerCase();
    const cardsTitle = document.querySelectorAll(".cards-title");

    cardsTitle.forEach(title => {
        const card = title.closest(".cards"); // O'sha title tegishli bo'lgan kartani topish
        
        if (title.textContent.toLowerCase().includes(search)) {
            card.classList.remove("d-none"); // Agar mos kelsa, ko'rsatish
        } else {
            card.classList.add("d-none"); // Mos kelmasa, yashirish
        }
    });
});

import { createCountries } from "./ubdateUl";
import request from "./request";

const searchSelect = document.querySelector(".form-select"); // Faqat bitta select element

searchSelect.addEventListener("change", () => { // change event
    let filterApi;

    if (searchSelect.value === "all") {
        filterApi = "https://restcountries.com/v3.1/all";
    } else {
        filterApi = `https://restcountries.com/v3.1/region/${searchSelect.value}`;
    }

    console.log(filterApi); // Faqat tekshirish uchun

    request(filterApi)
        .then((data) => {
            createCountries(data);
        })
        .catch((err) => {
            alert( err);
        });
});


