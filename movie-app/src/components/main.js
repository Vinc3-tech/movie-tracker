import { token } from "../API/api.js";
import { posterBaseUrl } from "../API/api.js";
import { animateSearchBar, AnimateArrow_Hover, AnimateArrow_Leave, AnimateCard_Hover, AnimateCard_Leave } from "./animation.js";    //animazioni

// * ------- animazione ricerca di un film --------- */
const icon_lens = document.querySelector(".search-icon");
const search_bar = document.querySelector(".search-bar");
const DURATION_SEARCH_BAR_ANIMATION = 1.5;
// dimensioni della search bar ==> width: clamp(180px, 35vw, 500px);

// al caricamento della pagina vengono definite le dimensioni della search-bar
document.addEventListener("DOMContentLoaded", () => {
    gsap.set(search_bar, { width: 0, autoAlpha: 0 });
})

icon_lens.addEventListener("click", () => {
    animateSearchBar();
});

// * -------- animazione hover discover section ---------- */
const contArrow = document.querySelector("#cont-arrow");
const arrow = document.querySelector("#svg-arrow-right");

contArrow.addEventListener("mouseenter", () => {
    AnimateArrow_Hover();
});
contArrow.addEventListener("mouseleave", () => {
    AnimateArrow_Leave();
});

// * -------------- animazione delle card dei film ------------ */
const filmsContainer = document.querySelector(".container-films");

filmsContainer.addEventListener("mouseover", (event) => {
    AnimateCard_Hover(event);
});

filmsContainer.addEventListener("mouseout", (event) => {
    AnimateCard_Leave(event)
});
