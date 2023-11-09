import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODFmMjRhYTI3ZjljMmE2MjQwZDA4NGY1ZTBjZjhkNyIsInN1YiI6IjY1NDhiMTgxZDhjYzRhMDBjNjViYWZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37SKcgg3EZTtsuk6llfKrlUwh5HU1vxfU5m75O6ei-U';

export async function getTrending() {
  const response = await axios.get(`trending/movie/day?language=uk-UK`);

  return response.data.results;
}
export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}?language=uk-UK`);

  return response.data;
}
export async function fetchMovieActors(movieId) {
  const response = await axios.get(`movie/${movieId}/credits?language=uk-UK`);

  return response.data;
}
export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`);

  return response.data.results;
}
export async function fetchMovies(query) {
  const response = await axios.get(
    `search/movie?language=uk-UK&query=${query}`
  );

  return response.data.results;
}
