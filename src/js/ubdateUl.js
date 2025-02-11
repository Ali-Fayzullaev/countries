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
        divEl.className = " col-5 col-md-3 col-lg-3 col-xl-2 border border-1 rounded  border-secondary  m-3 cards py-4 ps-3  mode";
        divEl.innerHTML = `
            <a href="./about.html?country=name/${countryName}" class="link-dark link-offset-2 link-underline-opacity-0 mode">
                        <div class="row text-dark mode">
                            <div class="col-12 d-flex flex-column align-items-center">
                                <img src="${flag}" class="img-fluid border border-2 border-black rounded " style="width: 200px; height: 150px; object-fit: cover;" alt="image">
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

// About UI

const countryInfoEl = document.querySelector(".country-info");


export const createCountryInfo = (country) => {
    const {population, flags, borders, tld, region, capital, name, languages, currencies, subregion, maps } = country;
    const map = maps.openStreetMaps
    console.log("Map URL:", map);
    const nativeName = (Object.values(name.nativeName)[0].official)
    const symbolMoney = (Object.values(currencies)[0].symbol)
    const nameMoney = (Object.values(currencies)[0].name);
    const language = (Object.values(languages));
    const countryNameForAbout = name.common
    console.log(country)
    

    countryInfoEl.innerHTML = `
         <div class="col-12 col-md-6 mb-5 my-md-0 d-flex justify-content-center align-content-center ">
                    <img src="${flags.svg}" class="img-fluid border border-black rounded-2" alt="Img Flag">
                 </div>
                 <div class="col-12 col-md-6">
                     <div class="row">
                         <div class="col-12">
                             <span class="fs-3 fw-medium">${countryNameForAbout}</span>
                         </div>
                         <div class="col-12 my-3">
                             <div class="row ">
                                 <div class="col-12 col-sm-6  fs-12">
                                     <span class="fw-medium d-block">Native Name: <span class="fw-light">${nativeName}</span></span>
                                     <span class="fw-medium d-block">Population: <span class="fw-light">${population}</span></span>
                                     <span class="fw-medium d-block">Region: <span class="fw-light">${region}</span></span>
                                     <span class="fw-medium d-block">Sub Region: <span class="fw-light">${subregion}</span></span>
                                     <span class="fw-medium d-block">Capital: <span class="fw-light">${capital}</span></span>
                                    
                                 </div>
                                 <div class="col-12 col-sm-6  fs-12">
                                     <span class="fw-medium d-block">Top Level Domain: <span class="fw-light">${tld}</span></span>
                                     <span class="fw-medium d-block">Currencies: <span class="fw-light">${nameMoney}</span></span>
                                     <span class="fw-medium d-block">Symbol: <span class="fw-light">${symbolMoney}</span></span>
                                     <span class="fw-medium d-block">Languages: <span class="fw-light">${language}</span></span>
                                   
                                 </div>
                             </div>
                         </div>
                         <div class="col-12 my-5">
                             <span class="fs-6 fw-medium ">Border Counties: </span>
                             ${borders ? borders.map((border) => {
                                return `
                                  <a href="./about.html?country=alpha/${border}">
                                    <span class="badge rounded-0 p-2 px-4 my-1 border-1 border mode  fw-lighter">${border}</span>
                                  </a>  
                                `
                            }) : "No border"}
                            
                            </div>
                    </div>
                </div>
    
    `;

}
