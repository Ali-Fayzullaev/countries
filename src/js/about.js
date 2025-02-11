import "../css/main.css"
import "./mode"
import request from "./request"
import { createCountryInfo } from "./ubdateUl"

const querySting = window.location.search
const urlParms = new URLSearchParams(querySting)
const country = urlParms.get("country")
const countryApy = `https://restcountries.com/v3.1/${country}`
console.log(countryApy);



request(countryApy).then((data) => {
    createCountryInfo(data[0])
}).catch((err) => {
    console.log(err.massage);
})