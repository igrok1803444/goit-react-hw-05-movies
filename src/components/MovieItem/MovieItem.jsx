import { NavLink, useLocation } from 'react-router-dom';
import { Item, OriginalTitle, Title, TitleContainer } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <Item>
      <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
        />
        <TitleContainer>
          <Title>{movie.title}</Title>
          <OriginalTitle>({movie.original_title})</OriginalTitle>
        </TitleContainer>
      </NavLink>
    </Item>
  );
};
