import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'scripts/Api';
import {
  BackLink,
  Container,
  DataWrapper,
  LinkList,
  MovieWrapper,
  OverViewText,
  OverViewTitle,
  TextWrapper,
} from './MovieDetails.styled';
import { OriginalTitle } from 'components/MovieItem/MovieItem.styled';
import { RouteLink } from 'components/Header/Header.styled';
import { NoData } from 'components/NoData/NoData';
import { NoDataMessage } from 'index';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieID } = useParams();
  const location = useLocation();
  const backLinkUrl = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchRequest() {
      const movieData = await fetchMovieDetails(movieID);
      setMovie(movieData);
    }
    fetchRequest();
  }, [movieID]);
  return (
    <>
      <Container className="container">
        <BackLink to={backLinkUrl.current}>Назад</BackLink>
        {movie && (
          <MovieWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.original_title} poster`}
              width="250"
            />
            <DataWrapper>
              <TextWrapper>
                <h2>{movie.title}</h2>
                <OriginalTitle>({movie.original_title})</OriginalTitle>
              </TextWrapper>
              <OverViewTitle>Огляд</OverViewTitle>
              <OverViewText>{movie.overview || NoDataMessage}</OverViewText>
              <h3>Жанри</h3>
              <ul>
                {NoDataMessage ||
                  movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>

              <LinkList>
                <li>
                  <RouteLink to="cast">Актори</RouteLink>
                </li>
                <li>
                  <RouteLink to="reviews">Відгуки</RouteLink>
                </li>
              </LinkList>
            </DataWrapper>
          </MovieWrapper>
        )}
        {!movie && <NoData />}
      </Container>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
