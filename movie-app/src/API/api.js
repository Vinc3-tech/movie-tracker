// !importante: dichiarazione e inizializzazione della chaive API per il database 
export const token = import.meta.env.VITE_TMDB_TOKEN;

// * link base che deve avere una qualsiasi immagine di un film
// Dimensioni poster valide comuni: w92, w154, w185, w342, w500, w780
export const posterBaseUrlCard = "https://image.tmdb.org/t/p/w300";
export const posterBaseUrlSearchList = "https://image.tmdb.org/t/p/w92";
