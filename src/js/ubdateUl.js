import { countCards } from "./main";

export const createCountries = (countries) => {
    if (!countCards) {
        console.error("Элемент .count-cards не найден");
        return;
    };

    countCards.innerHTML = ""; 

    countries.forEach((country) => {
        const countryName = country.name.common;
        // console.log(countryName);
        const population = country.population;
        const region = country.region;
        const flag = country.flags.svg;
        const capital = country.capital?.[0] || "No capital";

        const divEl = document.createElement("div");
        divEl.className = " col-5 col-md-3 col-lg-3 col-xl-2 border border-1 rounded-0 border-secondary-subtle bg-white m-3 cards py-4 ps-3";
        divEl.innerHTML = `
            <a href="./about.html" class="link-dark link-offset-2 link-underline-opacity-0">
                        <div class="row">
                            <div class="col-12 d-flex flex-column align-items-center">
                                <img src="${flag}" class="img-fluid" style="width: 200px; height: 150px; object-fit: cover;" alt="image">
                                <span class="fw-bold text-start mt-2 text-truncate cards-title">${countryName}</span>
                            </div>
                        
                            <div class="col-12 my-3 d-flex flex-column">
                                <span class="fw-medium">Population: <span class="fw-light">${population}</span></span>
                                <span class="fw-medium">Region: <span class="fw-light">${region}</span></span>
                                <span class="fw-medium">Capital: <span class="fw-light">${capital}</span></span>
                            </div>
                        </div>
                        
            </a>
        `;
        countCards.appendChild(divEl);
    });
};
