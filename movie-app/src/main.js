import { token } from "./API/api.js";
import { posterBaseUrl } from "./API/api.js";

const search_bar = document.querySelector(".search-bar");
const DURATION_SEARCH_BAR_ANIMATION = 1.5;
// dimensioni della search bar ==> width: clamp(180px, 35vw, 500px);

gsap.set(search_bar, { width: 0, autoAlpha: 0 });

/* Ricerca di un film */
const icon_lens = document.querySelector(".search-icon");

icon_lens.addEventListener("click", () => {
    // compare la barra di ricerca
    gsap.to(".search-bar", {
        autoAlpha: 1,
        duration: .1,
        onComplete: () => {
            // autofocus sulla barra di ricerca
            document.querySelector("#input-field").focus();
        }
    })
    gsap.to(".search-bar", {
        width: 500,
        duration: DURATION_SEARCH_BAR_ANIMATION,
        ease: "bounce",
    })
})
