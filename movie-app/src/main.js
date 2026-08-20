const token = import.meta.env.VITE_TMDB_TOKEN;

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

if (token) {
    const url = new URL("https://api.themoviedb.org/3/search/movie?query=Interstellar");
    url.searchParams.set("api_key", token);

    const response = await fetch(url, {
        headers: { accept: "application/json" },
    });

    const data = await response.json();
    const movie = data.results[0];

    const container = document.getElementById("movie");
    container.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${posterBaseUrl + movie.poster_path}" alt="Poster di ${movie.title}">
    `;
    console.log(movie);
}
