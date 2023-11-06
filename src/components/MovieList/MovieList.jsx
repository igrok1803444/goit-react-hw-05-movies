import { MovieItem } from 'components/MovieItem/MovieItem';

export const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};
