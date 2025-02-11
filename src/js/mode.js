const btnDarkLight = document.getElementById("btn-dark-light");
const textMode = document.getElementById("text-mode");
const modeLight = document.getElementById("mode-light");
const modeDark = document.getElementById("mode-dark");
const mode = document.querySelectorAll(".mode");


modeDark.addEventListener("click", () => {
    mode.forEach((bg) => {
    bg.classList.add("bg-dark");
    bg.classList.remove("bg-light");
    bg.classList.add("text-white");
    bg.classList.remove("text-dark");
    bg.querySelectorAll("span").forEach((span) => {
        span.classList.add("text-white");
        span.classList.remove("text-dark");
    });
    
    })
    textMode.textContent = "Mode Light"
    modeDark.classList.add("visually-hidden");
    modeLight.classList.toggle("visually-hidden");
})


modeLight.addEventListener("click", () => {
    mode.forEach((bg) => {
        bg.classList.remove("bg-dark");
        bg.classList.add("bg-light");
        bg.classList.remove("text-white");
        bg.classList.add("text-dark");
        bg.querySelectorAll("span").forEach((span) => {
            span.classList.remove("text-white");
            span.classList.add("text-dark");
        });
        
        })
        textMode.textContent = "Mode Dark"
        modeDark.classList.remove("visually-hidden");
        modeLight.classList.toggle("visually-hidden");
        
})





