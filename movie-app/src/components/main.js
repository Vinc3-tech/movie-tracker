import { token } from "../API/api.js";
import { posterBaseUrlCard, posterBaseUrlSearchList } from "../API/api.js";
import { AnimateIcons, animateSearchBar, AnimateCard_Hover, AnimateCard_Leave } from "./animation.js";    //animazioni
import { GenerateCasualFilm, CreateMovieCard } from "./card.js";

const navBar = document.querySelector("#navbar");
const contArrow = document.querySelector("#cont-arrow");
const arrow = document.querySelector("#svg-arrow-right");
const iconLens = document.querySelector(".search-icon");
const contSearch = document.querySelector(".cont-search");
const formSearchBar = document.querySelector(".form-search-bar");
const searchBar = document.querySelector("#input-field");
const labelSearchBar = document.querySelector("#search-label");

// * ------- animazione ricerca di un film --------- */
// dimensioni della search bar ==> width: clamp(180px, 35vw, 500px);

// al caricamento della pagina vengono definite le dimensioni della search-bar
document.addEventListener("DOMContentLoaded", () => {
    gsap.set(formSearchBar, { width: 0, autoAlpha: 0 });
});
if(iconLens) {
    AnimateIcons(iconLens);
    iconLens.addEventListener("click", () => {
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

// * ---------- ricerca di film nella barra di ricerca --------------
const N_RISULATATI = 5;
const lista = document.createElement("ul");     // lista
lista.classList.add("contList");

searchBar.addEventListener("input", async (e) => {
    //testo preso in input
    const testo = e.target.value.trim();
    // ad ogni input svuota la lista
    lista.replaceChildren();

    if (testo && labelSearchBar) {  // il label scompare quando l'utente scrive
        labelSearchBar.style.display = "none";
    }
    else if (testo === '') {
        labelSearchBar.style.display = "block";
    }

    // cerco il film e mostro i principali film trovati
    const url = new URL(`https://api.themoviedb.org/3/search/movie?query=${testo}`);
    url.searchParams.set("api_key", token);

    const response = await fetch(url, {
        headers: { accept: "application/json" },
    });

    const data = await response.json();
    console.log(data);

    for (let i = 0; i < Math.min(N_RISULATATI, data.results.length); i++) {
        const filmTrovato = data.results[i];
        CreateSearchCard(filmTrovato);        
    };

    // posizionamento della lista sotto la barra di ricerca
    contSearch.append(lista);
    gsap.set(lista, {
        position: "absolute",
        top: "100%",
        left: 0,
    });
});

function CreateSearchCard(film) {
    // creo tutti gli elementi per la card e assegno le classi
    const searchCard = document.createElement("li");
    searchCard.classList.add("searchCard");
    const searchCardPoster = document.createElement("div");
    searchCardPoster.classList.add("searchCardPoster");
    const searchCardInfo = document.createElement("div");
    searchCardInfo.classList.add("searchCardInfo");
    const movieRate = document.createElement("span");
    movieRate.classList.add("movieRate");

    if (film.poster_path) {
        searchCardPoster.style.background = `url("${posterBaseUrlSearchList + film.poster_path}") center center no-repeat`;
    }
    searchCardInfo.textContent = film.title;

    searchCardInfo.appendChild(movieRate);
    searchCard.append(searchCardPoster, searchCardInfo);

    lista.appendChild(searchCard);
}
