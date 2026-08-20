import { token } from "../API/api.js";
import { posterBaseUrl } from "../API/api.js";

const N_FILM = 5
let appendedFilms = 0;

document.addEventListener("DOMContentLoaded", async () => {

    /* generazione casuale di film al caricamento della pagina  */
    while (appendedFilms < N_FILM) {

        const randomPage = Math.floor(Math.random() * 500) + 1;

        const url = new URL("https://api.themoviedb.org/3/discover/movie");
        url.searchParams.set("page", randomPage);
        url.searchParams.set("api_key", token);

        const response = await fetch(url, {
            headers: { accept: "application/json" },
        });

        const data = await response.json();

        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

        const card = document.createElement("div");
        card.classList.add("film-discover-card");
        card.style.background = `url("${posterBaseUrl + randomMovie.poster_path}")`;

        if(randomMovie.poster_path) {
            document.querySelector(".container-films").appendChild(card);
            appendedFilms++;
        }
    }
    
})
