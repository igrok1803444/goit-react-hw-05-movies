import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
};
