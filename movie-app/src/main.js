const token = import.meta.env.VITE_TMDB_TOKEN;

try {
  if (!token) {
    throw new Error("Manca VITE_TMDB_TOKEN nel file .env.");
  }

  const url = new URL("https://api.themoviedb.org/3/movie/11");
  url.searchParams.set("api_key", token);

  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`TMDB ha risposto con errore ${response.status}.`);
  }

  const movie = await response.json();
  console.log(movie);

} catch (error) {
  console.error("Impossibile caricare il film:", error);
}