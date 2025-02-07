import "../css/main.css";
import "./filter";
import "./request"
import request from "./request";
import { createCountries } from "./ubdateUl";

export const countCards = document.querySelector(".count-cards");

const API = "https://restcountries.com/v3.1/all";

request(API)
    .then((data) => {
        createCountries(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
