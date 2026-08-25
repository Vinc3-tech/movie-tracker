import { token } from "../API/api.js";
import { posterBaseUrl } from "../API/api.js";
import { AnimateIcons, animateSearchBar, AnimateCard_Hover, AnimateCard_Leave } from "./animation.js";    //animazioni
import { GenerateCasualFilm, CreateMovieCard } from "./card.js";

const contArrow = document.querySelector("#cont-arrow");
const arrow = document.querySelector("#svg-arrow-right");
const icon_lens = document.querySelector(".search-icon");
const search_bar = document.querySelector(".search-bar");

// * ------- animazione ricerca di un film --------- */
// dimensioni della search bar ==> width: clamp(180px, 35vw, 500px);

// al caricamento della pagina vengono definite le dimensioni della search-bar
document.addEventListener("DOMContentLoaded", () => {
    gsap.set(search_bar, { width: 0, autoAlpha: 0 });
});
if(icon_lens) {
    AnimateIcons(icon_lens);
    icon_lens.addEventListener("click", () => {
        animateSearchBar();
    });
}

// * -------- animazione hover discover section ---------- */
AnimateIcons(arrow, contArrow);

// * -------------- animazione delle card dei film ------------ */
const filmsContainer = document.querySelector(".container-films");
filmsContainer.addEventListener("mouseover", (event) => {
    AnimateCard_Hover(event);
});

filmsContainer.addEventListener("mouseout", (event) => {
    AnimateCard_Leave(event)
});

// * ----------- creazione di nuovi film quando schiacci la freccia ----------------
if (arrow) {
    arrow.addEventListener("click", async () => {
        //crea un nuovo film
        const newMovie = await GenerateCasualFilm();
        const card = CreateMovieCard(newMovie);

        // TODO: fare in modo che la lista di film si muova per far vedere i film generati

    })
}
