import { token } from "./API/api.js";
import { posterBaseUrl } from "./API/api.js";

if (token) {
    const url = new URL("https://api.themoviedb.org/3/search/movie?query=Interstellar");
    url.searchParams.set("api_key", token);

    const response = await fetch(url, {
        headers: { accept: "application/json" },
    });

    const data = await response.json();
    const movie = data.results[0];
    console.log(movie);
}
