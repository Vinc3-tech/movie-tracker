import { token } from "../API/api.js";
import { posterBaseUrlCard } from "../API/api.js";

const DiscoverSection = document.querySelector("#discoverSection").getBoundingClientRect();

export async function GenerateCasualFilm() {
    const randomPage = Math.floor(Math.random() * 500) + 1;

    const url = new URL("https://api.themoviedb.org/3/discover/movie");
    url.searchParams.set("page", randomPage);
    url.searchParams.set("api_key", token);

    const response = await fetch(url, {
        headers: { accept: "application/json" },
    });

    const data = await response.json();

    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
    return randomMovie;
}

export function CreateMovieCard(randomMovie) {
    const card = document.createElement("div");
    card.classList.add("film-discover-card");
    card.style.background = `url("${posterBaseUrlCard + randomMovie.poster_path}") center center no-repeat`;

    if(randomMovie.poster_path) {
        document.querySelector(".container-films").appendChild(card);
    }

    return card;
}

document.addEventListener("DOMContentLoaded", async () => {

    /* generazione casuale di film al caricamento della pagina  */
    let pos_randomMovie;
    do {
        const randomMovie = await GenerateCasualFilm();
        let card = CreateMovieCard(randomMovie);

        if(randomMovie.poster_path) {
            pos_randomMovie = card.getBoundingClientRect();
        }
    }
    while( pos_randomMovie && pos_randomMovie.right < DiscoverSection.right )
    
})
