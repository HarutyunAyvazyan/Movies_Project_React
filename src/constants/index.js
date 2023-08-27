const API_KEY = 'f7c78b5eda88a3943874edbac21a5118';

export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const API_IMAGE = `https://image.tmdb.org/t/p/original/`;

export const API_SEARCH = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&page=1`;

export const aboutTheMovie = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

export const videoMovie = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;

export const API_POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

// export const similarMoviesAccordingToId = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;